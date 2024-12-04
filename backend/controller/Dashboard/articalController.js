const categoryModel = require("../../models/categoryModel");
const tagModel = require("../../models/tagModel");
const Article = require("../../models/articleModel");
const articleModel = require("../../models/articleModel");

module.exports.get_tag_category = async (req, res) => {
  try {
    // Fetch all tags and categories
    const allTag = await tagModel.find({});
    const allCategory = await categoryModel.find({});

    // Return the fetched data
    return res.status(200).json({ allTag, allCategory });
  } catch (error) {
    console.error("Error fetching tags and categories:", error); // Log the error for debugging
    return res.status(500).json({
      errorMessage: "Internal server error. Please try again later.",
    });
  }
};

// module.exports.addArticale = async (req, res) => {
//   const { adminId, adminName } = req;

//   // Validate input
//   const { title, slug, category, tag, text, image } = req.body;
//   if (!title || !slug || !category || !tag || !text || !image) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const newArticle = new Article({
//       adminId,
//       adminName,
//       title,
//       slug,
//       category,
//       category_slug: category,
//       tag,
//       tag_slug: tag,
//       text,
//       image,
//       articleText: text,
//     });

//     // Save the article to the database
//     await newArticle.save();
//     res
//       .status(200)
//       .json({ message: "Article added successfully", article: newArticle });
//   } catch (error) {
//     console.error("Error adding article:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

module.exports.addArticale = async (req, res) => {
  const { adminId, adminName } = req;
  try {
    const { title, slug, category, tag, text } = req.body;
    console.log(req.body);
    // Validate that all fields are provided
    // if (!title || !slug || !category || !tag || !text) {
    //   return res.status(400).json({ error: "All fields are required" });
    // }

    // Validate that an image is provided
    // if (!req.file) {
    //   return res.status(400).json({ error: "No image file uploaded" });
    // }

    // Create new article in the database
    const newArticle = new Article({
      adminId,
      adminName,
      title,
      slug,
      category,
      category_slug: category,
      tag,
      tag_slug: tag,
      articleText: text,
      // image,
    });

    // Save the article to the database
    await newArticle.save();

    res.status(200).json({
      message: "Article added successfully",
      article: newArticle,
    });
  } catch (error) {
    console.error("Error adding article:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.get_article = async (req, res) => {
  const { role, adminId } = req;
  const { currentPage = 1, searchValue = "" } = req.query;
  const perPage = 6;
  const skipPage = (parseInt(currentPage) - 1) * perPage;

  try {
    let query = role === "admin" ? {} : { adminId };

    // If searchValue is provided, add it to the query
    if (searchValue) {
      query.title = { $regex: searchValue, $options: "i" };
    }

    // Fetch the total count based on the query
    const articleCount = await articleModel.countDocuments(query);
    console.log("Article Count:", articleCount); // Log the count to see if there are any articles

    const maxPages = Math.ceil(articleCount / perPage);

    // If no articles are found, return a clear response
    if (articleCount === 0) {
      return res
        .status(200)
        .json({ message: "No articles found matching the search query" });
    }

    // If the currentPage exceeds maxPages, return an error
    if (currentPage > maxPages) {
      return res
        .status(400)
        .json({ message: "Page number exceeds the available pages" });
    }

    // Fetch paginated articles based on the query
    const articles = await articleModel
      .find(query)
      .skip(skipPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    console.log("Articles:", articles); // Log the fetched articles

    // Return the response
    res.status(200).json({
      allArticle: articles,
      perPage,
      articleCount,
      maxPages,
      currentPage: parseInt(currentPage),
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return res.status(500).json({
      errorMessage: "Internal server error. Please try again later.",
    });
  }
};
