import prisma from "../db/client.js";
import validateId from "../utils/validateId.utils.js";

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    console.log("Book ID: ", req.params.bookId);
    const bookId = validateId(req.params.bookId, "Book ID");
    const userId = req.user.id;

    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const existingReview = await prisma.review.findUnique({
      where: {
        // auto-generated name userId_bookId
        userId_bookId: { userId, bookId },
      },
    });
    if (existingReview) {
      return res.status(400).json({ message: "You have already reviewed this book" });
    }

    const newReview = await prisma.review.create({
      data: {
        rating,
        comment: comment || null,
        userId,
        bookId,
      },
      include: {
        user: { select: { name: true } },
        book: { select: { title: true } },
      },
    });

    res.status(201).json({ message: "Review created successfully", data: newReview });
  } catch (error) {
    console.error("Error creating review: ", error);
    res.status(500).json({
      success: false,
      message: "Error creating review",
      error: error,
    });
  }
};

const getReviewsByBook = async (req, res) => {
  try {
    const bookId = validateId(req.params.bookId, "Book ID");

    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const reviews = await prisma.review.findMany({
      where: { bookId },
      include: {
        user: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ message: "Reviews retrieved successfully", data: reviews });
  } catch (error) {
    console.error("Error retrieving reviews: ", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving reviews",
      error: error,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = validateId(req.params.reviewId, "Review ID");

    await prisma.review.delete({
      where: { id: reviewId },
    });

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review: ", error);
    res.status(500).json({
      success: false,
      message: "Error deleting review",
      error: error,
    });
  }
};

export { createReview, getReviewsByBook, deleteReview };
