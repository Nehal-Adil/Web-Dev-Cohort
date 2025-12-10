import prisma from "../db/client.js";
import validateId from "../utils/validateId.utils.js";

const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user.id;

    console.log("items: ", items);

    // Step 1: Fetch all referenced books in a single query
    const bookIds = items.map((item) => item.bookId);
    const books = await prisma.book.findMany({
      where: { id: { in: bookIds } },
      select: { id: true, title: true, price: true, stock: true },
    });

    // Map for quick lookup
    // const bookMap = new Map(books.map((book) => [book.id, book]));

    // Step 2: Validate stock & calculate total amount
    let totalAmount = 0;
    for (const item of items) {
      const book = books.find((b) => b.id === item.bookId);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      if (book.stock < item.quantity) {
        return res.status(400).json({ message: "Not enough stock for this book" });
      }
      totalAmount += item.quantity * book.price;
    }

    // Step 3: Save order
    const newOrder = await prisma.order.create({
      data: {
        userId,
        items,
        totalAmount,
        status: "pending",
      },
    });

    res.status(201).json({
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    console.error("Error creating order: ", error);
    res.status(500).json({
      success: false,
      message: "Error creating order",
      error: error,
    });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true } },
      },
    });

    res.status(200).json({ message: "Orders retrieved successfully", data: orders });
  } catch (error) {
    console.error("Error retrieving orders: ", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving orders",
      error: error,
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId = validateId(req.params.orderId, "Order ID");

    console.log("Order ID: ", req.params.orderId);
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        user: { select: { name: true, email: true } },
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId !== req.user.id) {
      return res.status(403).json({ message: "You are not the owner of this order" });
    }

    res.status(200).json({ message: "Order retrieved successfully", data: order });
  } catch (error) {
    console.error("Error retrieving order: ", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving order",
      error: error,
    });
  }
};

export { createOrder, getOrdersByUser, getOrderById };
