import axios from "axios";

export const get_tag_category = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("blog_token"); // Get the token from localStorage
    const response = await axios.get(
      `http://localhost:5030/api/v1/get-tag-category`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to Authorization header
        },
        withCredentials: true, // Ensure credentials are sent
      }
    );
    dispatch({
      type: "CATE_TAG_GET_SUCCESS",
      payload: {
        allTag: response.data.allTag,
        allCategory: response.data.allCategory,
      },
    });
  } catch (error) {
    console.error("Error fetching tag and category:", error.response);
  }
};

export const add_articale = (formData) => async (dispatch) => {
  dispatch({ type: "ART_SET_LOADER" });
  console.log(formData);
  try {
    const token = localStorage.getItem("blog_token");
    const response = await axios.post(
      "http://localhost:5030/api/v1/add-artical",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    console.log(response);
    dispatch({
      type: "ADD_ARTICLE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_ARTICLE_FAILURE",
      error: error.response ? error.response.data : error.message,
    });
    console.log(error);
    console.error("Error adding article:", error.response?.data);
  }
};
////image
export const upload_image = (imageFile) => async (dispatch) => {
  dispatch({ type: "UPLOAD_IMAGE_START" });

  try {
    const token = localStorage.getItem("blog_token");

    if (!token) {
      throw new Error("Token not found in local storage");
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      "http://localhost:5030/api/v1/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the retrieved token
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "UPLOAD_IMAGE_SUCCESS",
      payload: response.data,
    });

    // Return the image file path from the response
    return response.data.filePath;
  } catch (error) {
    dispatch({
      type: "UPLOAD_IMAGE_FAILURE",
      error: error.response ? error.response.data : error.message,
    });
    console.error("Error uploading image:", error.response?.data);

    // Return null in case of error
    return null;
  }
};

export const get_all_article =
  (page = 1, searchValue = "") =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("blog_token"); // Get the token from localStorage

      if (!token) {
        console.error("No token found. Please login again.");
        return;
      }

      const response = await axios.get(
        "http://localhost:5030/api/v1/get-article",
        {
          params: { page, searchValue },
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      // Dispatch the fetched articles to the Redux store
      dispatch({
        type: "SET_ARTICLES", // Make sure this action type exists in your reducers
        payload: response.data,
      });
    } catch (error) {
      console.error(
        "Error fetching articles:",
        error.response?.data || error.message
      );
      // Optionally dispatch an error action to update the UI
      dispatch({
        type: "FETCH_ARTICLES_FAIL",
        payload: error.response?.data?.errorMessage || "Something went wrong",
      });
    }
  };
