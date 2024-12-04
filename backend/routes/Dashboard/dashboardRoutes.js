const express = require("express");
const multer = require("multer"); // Import multer
const { admin_middleware } = require("../../middleware/authMiddleware");
const {
  category_add,
  category_get,
  category_delete,
  category_edit,
  category_update,
} = require("../../controller/Dashboard/categoryController");

const {
  tag_add,
  tag_get,
  tag_delete,
  tag_edit,
  tag_update,
} = require("../../controller/Dashboard/tagController");

const {
  addArticale,
  get_article,
  get_tag_category,
} = require("../../controller/Dashboard/articalController");

const router = express.Router(); // Initialize the router here

//category
router.post("/add-category", admin_middleware, category_add);
router.get("/get-category", admin_middleware, category_get);
router.delete(
  "/delete-category/:categoryId",
  admin_middleware,
  category_delete
);
router.get("/edit-category/:categorySlug", admin_middleware, category_edit);
router.patch("/update-category/:categoryId", admin_middleware, category_update);

//tag
router.post("/add-tag", admin_middleware, tag_add);
router.get("/get-tag", admin_middleware, tag_get);
router.delete("/delete-tag/:tagId", admin_middleware, tag_delete);
router.get("/edit-tag/:tagSlug", admin_middleware, tag_edit);
router.patch("/update-tag/:tagId", admin_middleware, tag_update);

//artical
router.post("/add-artical", admin_middleware, addArticale);

router.get("/get-article", admin_middleware, get_article);
router.get("/get-tag-category", admin_middleware, get_tag_category);

module.exports = router;
