import axios from "axios";

export const add_category = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });

  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem("blog_token");

    if (!token) {
      throw new Error("Token not found in local storage");
    }

    const response = await axios.post(
      "http://localhost:5030/api/v1/add-category",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the retrieved token
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "CATEGORY_SUCCESS",
      payload: { successMessage: response.data.successMessage },
    });
    console.log(response.data);
  } catch (error) {
    dispatch({
      type: "CATEGORY_ERROR",
      payload: { error: error.response?.data.errorMessage || error.message },
    });
    console.log(error.response?.data || error.message);
  }
};

export const get_all_category =
  (page = 1, searchValue = "") =>
  async (dispatch) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("blog_token");

      if (!token) {
        throw new Error("Token not found in local storage");
      }

      try {
        const response = await axios.get(
          `http://localhost:5030/api/v1/get-category?page=${page}&searchValue=${searchValue}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use the retrieved token
            },
            withCredentials: true,
          }
        );

        // Dispatch success action
        dispatch({
          type: "DASHBOARD_CATEGORY_GET_SUCCESS",
          payload: {
            allCategory: response.data.allCategory,
            parPage: response.data.parPage,
            categoryCount: response.data.categoryCount,
          },
        });
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data || error.message
        );

        // Dispatch error action (optional)
        dispatch({
          type: "DASHBOARD_CATEGORY_GET_ERROR",
          payload: {
            errorMessage: error.response?.data?.error || error.message,
          },
        });
      }
    } catch (error) {
      console.error("Token retrieval error:", error.message);

      // Dispatch token-related error (optional)
      dispatch({
        type: "TOKEN_ERROR",
        payload: {
          errorMessage: "Token not found or invalid",
        },
      });
    }
  };

export const delete_category = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("blog_token");

    if (!token) {
      throw new Error("Token not found in local storage");
    }
    const response = await axios.delete(
      `http://localhost:5030/api/v1/delete-category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the retrieved token
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "CATEGORY_DELETE_SUCCESS",
      payload: { successMessage: response.data.successMessage },
    });
    // Fetch updated list after deletion
    dispatch(get_all_category());
  } catch (error) {
    console.error("Error deleting category:", error.response?.data);
  }
};

export const edit_category = (categorySlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5030/api/v1/edit-category/${categorySlug}`,
      { withCredentials: true }
    );
    dispatch({
      type: "EDIT_CATEGORY_GET_SUCCESS",
      payload: {
        editCategory: response.data.editCategory,
      },
    });
    dispatch({
      type: "EDIT_REQUEST_SET",
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const update_category = (id, data) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `http://localhost:5030/api/v1/update-category/${id}`,
      data,
      { withCredentials: true }
    );
    dispatch({
      type: "CATEGORY_UPDATE_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "CATEGORY_UPDATE_FAIL",
      payload: { error: error.response.data.errorMessage },
    });
  }
};
