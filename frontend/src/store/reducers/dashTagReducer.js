// Define the initial state object
const initialTagState = {
  loader: false,
  tagError: "",
  tagSuccessMessage: "",
  allTag: [],
  parPage: 0,
  tagCount: 0,
  editTag: "",
  editRequest: false,
};

// Reducer function to handle different actions
export const dashTagReducer = (state = initialTagState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADER":
      return {
        ...state,
        loader: true,
      };

    case "TAG_SUCCESS":
    case "TAG_DELETE_SUCCESS":
    case "TAG_UPDATE_SUCCESS":
      return {
        ...state,
        loader: false,
        tagSuccessMessage: payload.successMessage,
      };

    case "DASHBOARD_TAG_GET_SUCCESS":
      return {
        ...state,
        allTag: payload.allTag,
        parPage: payload.parPage,
        tagCount: payload.tagCount,
      };

    case "EDIT_TAG_GET_SUCCESS":
      return {
        ...state,
        editTag: payload.editTag,
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

    case "TAG_SUCCESS_MSG_CLEAR":
      return {
        ...state,
        tagSuccessMessage: "",
      };

    case "TAG_ERROR_MSG_CLEAR":
      return {
        ...state,
        tagError: "",
      };

    case "TAG_ERROR":
      return {
        ...state,
        loader: false,
        tagError: payload.error,
      };

    case "TAG_UPDATE_FAIL":
      return {
        ...state,
        loader: false,
        tagError: payload.error,
      };

    default:
      return state;
  }
};
