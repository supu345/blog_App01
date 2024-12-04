module.exports.article_validator = (data, files) => {
  const errors = {};
  const { title, category, tag, slug, text } = data;

  // Validate text fields
  if (typeof title !== "string" || title.trim() === "") {
    errors.title = "Title is required and must be a string.";
  }
  if (typeof category !== "string" || category.trim() === "") {
    errors.category = "Category is required.";
  }
  if (typeof tag !== "string" || tag.trim() === "") {
    errors.tag = "Tag is required.";
  }
  if (typeof slug !== "string" || slug.trim() === "") {
    errors.slug = "Slug is required.";
  }
  if (typeof text !== "string" || text.trim() === "") {
    errors.text = "Content is required.";
  }

  // Validate file field
  if (!files.image || !files.image.filepath) {
    errors.image = "Please provide an image.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
