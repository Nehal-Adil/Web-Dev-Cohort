const validateId = (idStr, fieldName = "ID") => {
  if (!idStr) {
    throw new Error(`${fieldName} is required`);
  }

  const id = Number(idStr);

  if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
    throw new Error(`${fieldName} must be a positive integer`);
  }

  return id;
};

export default validateId;
