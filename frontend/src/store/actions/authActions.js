import axios from "axios";

export const admin_login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOADER_RUN" });

    const response = await axios.post(
      "http://localhost:5030/api/v1/admin-login",
      data,
      { withCredentials: true }
    );
    localStorage.setItem("blog_token", response.data.token);

    dispatch({
      type: "ADMIN_LOGIN_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
        token: response.data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_LOGIN_FAIL",
      payload: error.response?.data?.errorMessage || "Something went wrong",
    });
  }
};
