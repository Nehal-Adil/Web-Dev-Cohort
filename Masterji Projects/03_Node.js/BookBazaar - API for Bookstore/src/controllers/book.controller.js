import prisma from "../db/client.js";

const validateBookId = (id) => {
  const num = parseInt(id, 10);
  if (isNaN(num) || num <= 0) {
    throw new Error("Invalid book ID");
  }
  return num;
};

const createBook = async (req, res) => {
  try {
    const bookData = req.body; // guaranteed valid by zod

    const newBook = await prisma.book.create({ data: bookData });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    console.error("Error creating book: ", error);
    res.status(500).json({
      success: false,
      message: "Error creating book",
      error: error,
    });
  }
};

const getBooksByQuery = async (req, res) => {
  try {
    const { title, author, genre, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

    // build filter dynamically
    const where = {};
    if (title) where.title = { contains: title, mode: "insensitive" };
    if (author) where.author = { contains: author, mode: "insensitive" };
    if (genre) where.genre = { contains: genre, mode: "insensitive" };
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }

    // TODO: add pagination
    // const take = limit || 10
    // const skip = (page - 1) * take

    const books = await prisma.book.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    console.error("Error retrieving books: ", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving books",
      error: error,
    });
  }
};

const getBooksById = async (req, res) => {
  try {
    const id = validateBookId(req.params.id);
    const book = await prisma.book.findUnique({
      where: { id },
      //   Nested reviews with author names
      include: {
        reviews: {
          include: { user: { select: { name: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!book) {
      return res.status(404).json({
        error: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    console.error("Error retrieving book: ", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving book",
      error: error,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const id = validateBookId(req.params.id);
    const updateData = req.body;

    const book = await prisma.book.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    console.error("Error updating book: ", error);
    res.status(500).json({
      success: false,
      message: "Error updating book",
      error: error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = validateBookId(req.params.id);
    await prisma.book.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Book not found" });
    }
    console.error("Error deleting book: ", error);
    res.status(500).json({
      success: false,
      message: "Error deleting book",
      error: error,
    });
  }
};

export { createBook, getBooksByQuery, getBooksById, updateBook, deleteBook };
