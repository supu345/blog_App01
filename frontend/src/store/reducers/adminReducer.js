import { jwtDecode } from "jwt-decode";

const initState = {
  authenticate: false,
  userInfo: "",
  errorMessage: "",
  successMessage: "",
  loader: false,
};

const DT = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const expiresTime = new Date(decodedToken.exp * 1000);

    if (new Date() > expiresTime) {
      localStorage.removeItem("blog_token");
      return null;
    }
    return decodedToken;
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("blog_token"); // Clear invalid token
    return null;
  }
};

const getToken = localStorage.getItem("blog_token");
const decodedToken = getToken ? DT(getToken) : null;

initState.authenticate = decodedToken ? true : false;
initState.userInfo = decodedToken || "";

export const adminReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOADER_RUN":
      return { ...state, loader: true };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loader: false,
        errorMessage: "",
        authenticate: true,
        userInfo: DT(payload.token),
        successMessage: payload.successMessage,
      };

    case "LOGIN_SUCCESS_MESSAGE_CLEAR":
      return {
        ...state,
        successMessage: "",
      };

    case "ADMIN_LOGIN_FAIL":
      return {
        ...state,
        loader: false,
        errorMessage: payload,
        authenticate: false,
        userInfo: "",
        successMessage: "",
      };

    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        loader: false,
        errorMessage: "",
        authenticate: true,
        userInfo: payload,
        successMessage: "Login successful!",
      };

    case "OTP_SEND_SUCCESS":
      return {
        ...state,
        successMessage: payload.successMessage,
        loader: false,
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        errorMessage: payload,
        loader: false,
      };

    case "LOGOUT_USER":
      localStorage.removeItem("blog_token");
      return {
        ...state,
        authenticate: false,
        userInfo: "",
        successMessage: "",
        errorMessage: "",
      };

    default:
      return state;
  }
};
