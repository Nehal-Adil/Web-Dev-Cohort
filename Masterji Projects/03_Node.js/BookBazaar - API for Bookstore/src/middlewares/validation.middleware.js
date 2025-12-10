export const validationMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      // check if request body is empty
      if (!req.body) {
        return res.status(400).json({
          success: false,
          error: "Request body is missing",
        });
      }

      // validate request body
      const result = schema.safeParse(req.body);

      console.log("Validation result: ", result);

      if (!result.success) {
        // Debug logging - see what Zod returns
        // console.log("Full error object:", JSON.stringify(result.error, null, 2));
        // console.log("Error issues:", result.error.issues);

        const errors = result.error.issues.map((err) => ({
          field: err.path.join(".") || "body",
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors: errors,
        });
      }

      next();
    } catch (error) {
      console.error("Validation middleware error:", error);
      return res.status(500).json({
        success: false,
        message: "Server error in validation",
      });
    }
  };
};
