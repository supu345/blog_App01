import React, { useState, useRef, useEffect } from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import {
  get_tag_category,
  add_articale,
  upload_image,
} from "../../store/actions/Dashboard/articalAction";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ArticalAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allTag, allCategory, loader, articleError, articleSuccessMessage } =
    useSelector((state) => state.artical);

  const editor = useRef();
  const [text, setText] = useState("");

  const [state, setState] = useState({
    title: "",
    slug: "",
    category: "",
    tag: "",
    image: "",
  });

  const [image, setImage] = useState({
    imageName: "",
    img: "",
  });

  // Handle input change
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding field in the state
    }));
  };

  // Image upload handler
  // const imagehandler = async (e) => {
  //   const selectedImage = e.target.files[0];

  //   if (!selectedImage) {
  //     toast.error("Please select an image to upload!");
  //     return;
  //   }

  //   setImage({ imageName: selectedImage.name, img: selectedImage });

  //   // Call the action to upload the image
  //   try {
  //     const uploadedImageUrl = await dispatch(upload_image(selectedImage));
  //     if (uploadedImageUrl) {
  //       setState((prevState) => ({
  //         ...prevState,
  //         image: uploadedImageUrl, // Save the image URL to the state
  //       }));
  //       toast.success("Image uploaded successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     toast.error("Failed to upload the image!");
  //   }
  // };

  const handleContentChange = (newText) => {
    setText(newText);
  };

  useEffect(() => {
    dispatch(get_tag_category()); // Fetch tags and categories on component mount
  }, [dispatch]);

  // Handle article submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled, including the image
    if (
      !state.title.trim() ||
      !state.slug.trim() ||
      !state.category ||
      !state.tag ||
      !text.trim()
    ) {
      toast.error("All fields, including the image, are required!");
      return;
    }

    const articleData = {
      ...state,
      content: text, // Include the editor content
    };
    console.log(articleData);
    try {
      // Dispatch the action to add the article
      await dispatch(add_articale(articleData));
      toast.success("Article added successfully!");
      // navigate("/"); // Redirect after successful submission
    } catch (error) {
      console.error("Error adding article:", error);
      toast.error("Failed to add the article!");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Add Article</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Add Article</h2>
        {articleError && <p className="text-red-500">{articleError}</p>}
        {articleSuccessMessage && (
          <p className="text-green-500">{articleSuccessMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Title input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={state.title}
              onChange={inputHandle}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter article title"
            />
          </div>

          {/* Slug input */}
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={state.slug}
              onChange={inputHandle}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter article slug"
            />
          </div>

          {/* Category selection */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={state.category}
              onChange={inputHandle}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select category</option>
              {allCategory &&
                allCategory.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
            </select>
          </div>

          {/* Tag selection */}
          <div className="mb-4">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <select
              name="tag"
              id="tag"
              value={state.tag}
              onChange={inputHandle}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select tag</option>
              {allTag &&
                allTag.map((tag) => (
                  <option key={tag._id} value={tag._id}>
                    {tag.tagName}
                  </option>
                ))}
            </select>
          </div>

          {/* Image upload */}
          {/* <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={imagehandler}
              className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {image.imageName && (
              <p className="text-sm text-gray-500 mt-2">
                Selected: {image.imageName}
              </p>
            )}
          </div> */}

          {/* Content editor */}
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <JoditEditor
              ref={editor}
              value={text}
              onChange={handleContentChange}
              tabIndex={1}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600"
            disabled={loader}
          >
            {loader ? "Saving..." : "Save Article"}
          </button>
        </form>
      </div>
      <Toaster />
    </Layout>
  );
};
export default ArticalAdd;
