import axios from "axios";

export const add_tag = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });

  try {
    const token = localStorage.getItem("blog_token");

    if (!token) {
      throw new Error("Token not found in local storage");
    }
    const response = await axios.post(
      "http://localhost:5030/api/v1/add-tag",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the retrieved token
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "TAG_ADD_SUCCESS",
      payload: { successMessage: response.data.successMessage },
    });
    console.log(response.data);
  } catch (error) {
    dispatch({
      type: "TAG_ERROR",
      payload: { error: error.response.data.errorMessage },
    });
    console.log(error.response.data);
  }
};

export const get_all_tag =
  (page = 1, searchValue = "") =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("blog_token");

      if (!token) {
        throw new Error("Token not found in local storage");
      }
      const response = await axios.get(
        `http://localhost:5030/api/v1/get-tag?page=${page}&searchValue=${searchValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the retrieved token
          },

          withCredentials: true,
        }
      );
      dispatch({
        type: "DASHBOARD_TAG_GET_SUCCESS",
        payload: {
          allTag: response.data.allTag,
          parPage: response.data.parPage,
          tagCount: response.data.tagCount,
        },
      });
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response?.data || error.message
      );
    }
  };

export const delete_tag = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:5030/api/v1/delete-tag${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "TAG_DELETE_SUCCESS",
      payload: { successMessage: response.data.successMessage },
    });
    // Fetch updated list after deletion
    dispatch(get_all_tag());
  } catch (error) {
    console.error("Error deleting category:", error.response?.data);
  }
};

export const edit_tag = (tagSlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5030/api/v1/edit-tag/${tagSlug}`,
      { withCredentials: true }
    );
    dispatch({
      type: "EDIT_TAG_GET_SUCCESS",
      payload: {
        editTag: response.data.editTag,
      },
    });
    dispatch({
      type: "EDIT_REQUEST_SET",
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const update_tag = (id, data) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `http://localhost:5030/api/v1/update-tag/${id}`,
      data,
      { withCredentials: true }
    );
    dispatch({
      type: "TAG_UPDATE_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "TAG_UPDATE_FAIL",
      payload: { error: error.response.data.errorMessage },
    });
  }
};
