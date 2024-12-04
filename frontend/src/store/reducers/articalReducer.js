const initState = {
  loader: false,
  articleError: "",
  allArticle: [],
  parPage: 0,
  articleCount: 0,
  editArticle: "",
  articleSuccessMessage: "",
  editRequest: false,
  allTag: [],
  allCategory: [],

  articles: [],
  maxPages: 1,
  currentPage: 1,
  uploadedImage: null, // Add a state property for the uploaded image
  uploadError: null, // Add a state property for image upload errors
};

export const articalReducer = (state = initState, action) => {
  const { payload, type } = action;

  if (type === "CATE_TAG_GET_SUCCESS") {
    return {
      ...state,
      allTag: payload.allTag,
      allCategory: payload.allCategory,
    };
  }

  if (type === "ART_SET_LOADER") {
    return {
      ...state,
      loader: true,
    };
  }

  if (type === "ADD_ARTICLE_SUCCESS") {
    return {
      ...state,
      loader: false,
      articleError: "",
      articleSuccessMessage: payload.articleSuccessMessage,
    };
  }

  if (type === "ADD_ARTICLE_FAILURE") {
    return {
      ...state,
      loader: false,
      articleError: payload,
    };
  }

  if (type === "ADD_SUCCESS_MSG_CLEAR") {
    return {
      ...state,
      articleSuccessMessage: "",
    };
  }

  if (type === "SET_ARTICLES") {
    return {
      ...state,
      articles: payload.allArticle,
      maxPages: payload.maxPages,
      currentPage: payload.currentPage,
      articleCount: payload.articleCount,
    };
  }

  // Image upload handling
  if (type === "UPLOAD_IMAGE_START") {
    return {
      ...state,
      loader: true,
      uploadError: null, // Reset upload error
    };
  }

  if (type === "UPLOAD_IMAGE_SUCCESS") {
    return {
      ...state,
      loader: false,
      uploadedImage: payload, // Store the uploaded image details
      uploadError: null, // Clear any previous errors
    };
  }

  if (type === "UPLOAD_IMAGE_FAILURE") {
    return {
      ...state,
      loader: false,
      uploadedImage: null, // Reset uploaded image on failure
      uploadError: action.error, // Store the error message
    };
  }

  return state;
};
