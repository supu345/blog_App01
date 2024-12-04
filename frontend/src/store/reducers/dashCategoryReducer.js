// Define the initial state object
const initialCategoryState = {
  loader: false,
  categoryError: "",
  categorySuccessMessage: "",
  allCategory: [],
  parPage: 0,
  categoryCount: 0,
  editCategory: "",
  editRequest: false,
};

// Reducer function to handle different actions
export const dashCategoryReducer = (state = initialCategoryState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADER":
      return {
        ...state,
        loader: true,
      };

    case "CATEGORY_SUCCESS":
    case "CATEGORY_DELETE_SUCCESS":
    case "CATEGORY_UPDATE_SUCCESS": // <-- Add colon here
      return {
        ...state,
        loader: false,
        categorySuccessMessage: payload.successMessage,
      };

    case "DASHBOARD_CATEGORY_GET_SUCCESS":
      return {
        ...state,
        allCategory: payload.allCategory,
        parPage: payload.parPage,
        categoryCount: payload.categoryCount,
      };

    case "EDIT_CATEGORY_GET_SUCCESS":
      return {
        ...state,
        editCategory: payload.editCategory,
      };

    case "EDIT_REQUEST_SET":
      return {
        ...state,
        editRequest: true,
      };

    case "EDIT_REQUEST_CLEAR":
      return {
        ...state,
        editRequest: false,
      };

    case "CATEGORY_SUCCESS_MSG_CLEAR":
      return {
        ...state,
        categorySuccessMessage: "",
      };

    case "CATEGORY_ERROR_MSG_CLEAR":
      return {
        ...state,
        categoryError: "",
      };

    case "CATEGORY_ERROR":
      return {
        ...state,
        loader: false,
        categoryError: payload.error,
      };

    case "CATEGORY_UPDATE_FAIL":
      return {
        ...state,
        loader: false,
        categoryError: payload.error,
      };

    default:
      return state;
  }
};
