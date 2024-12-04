const tagModel = require("../../models/tagModel");

module.exports.tag_add = async (req, res) => {
  const { tagName, tagDes } = req.body;

  const errors = {};

  // Validate request body
  if (!tagName) {
    errors.tagName = "Please provide tag name";
  }
  if (!tagDes) {
    errors.tagDes = "Please provide tag description";
  }

  // If validation errors exist, return a response
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errorMessage: errors });
  }

  // Create slug by replacing spaces with dashes and converting to lowercase
  const tagSlug = tagName.trim().toLowerCase().replace(/\s+/g, "-");

  try {
    // Check if the tag already exists
    const checkTag = await tagModel.findOne({ tagSlug });
    if (checkTag) {
      return res.status(409).json({
        errorMessage: {
          error: "Tag already exists",
        },
      });
    }

    // Create a new tag
    await tagModel.create({
      tagName: tagName.trim(),
      tagSlug,
      tagDes: tagDes.trim(),
    });

    return res.status(201).json({
      successMessage: "Tag added successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

module.exports.tag_get = async (req, res) => {
  const { page = 1, searchValue = "" } = req.query;

  // Set items per page
  const parPage = 6;
  const skipPage = (parseInt(page) - 1) * parPage;

  try {
    // Handle searching functionality
    let query = {};
    if (searchValue && searchValue !== "undefined") {
      query = {
        tagCountName: { $regex: searchValue, $options: "i" },
      };
    }

    // Get total count of categories based on search query
    const tagCount = await tagModel.countDocuments(query);

    // Fetch paginated categories with sorting
    const getTag = await tagModel
      .find(query)
      .skip(skipPage)
      .limit(parPage)
      .sort({ tagAt: -1 });

    return res.status(200).json({
      allTag: getTag,
      parPage,
      tagCount,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

module.exports.tag_delete = async (req, res) => {
  const tagId = req.params.tagId;
  try {
    await tagModel.findByIdAndDelete(tagId);
    return res.status(200).json({
      successMessage: "Tag delete success",
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};
module.exports.tag_edit = async (req, res) => {
  const { tagSlug } = req.params;
  try {
    // Use the correct field name as per your schema
    const editTag = await tagModel.findOne({ tagSlug });

    if (!editTag) {
      return res.status(404).json({ errorMessage: "Tag not found" });
    }

    return res.status(200).json({ editTag });
  } catch (error) {
    console.error("Error fetching tag:", error);
    return res.status(500).json({
      errorMessage: { error: "Internal server error" },
    });
  }
};

module.exports.tag_update = async (req, res) => {
  const { tagId } = req.params;
  const { tagName, tagDes } = req.body;
  const errors = {};

  // Validate inputs
  if (!tagName) errors.tagName = "Please provide tag name";
  if (!tagDes) errors.tagDes = "Please provide tag description";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errorMessage: errors });
  }

  // Generate tagSlug
  const tagSlug = tagName.trim().toLowerCase().replace(/\s+/g, "-");

  try {
    const updatedTag = await tagModel.findByIdAndUpdate(
      tagId,
      {
        tagName: tagName.trim(),
        tagSlug,
        tagDes: tagDes.trim(),
      },
      { new: true }
    );

    if (!updatedTag) {
      return res.status(404).json({ errorMessage: "Tag not found" });
    }

    return res.status(200).json({
      successMessage: "Tag update successful",
      updatedTag,
    });
  } catch (error) {
    console.error("Error updating tag:", error);
    return res.status(500).json({
      errorMessage: { error: "Internal server error" },
    });
  }
};
