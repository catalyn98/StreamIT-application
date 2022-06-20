const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return {
        categoriesMovies: [],
        isFetching: true,
        error: false,
      };

    case "GET_CATEGORIES_SUCCESS":
      return {
        categoriesMovies: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_CATEGORIES_FAILURE":
      return {
        categoriesMovies: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_CATEGORY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_CATEGORY_SUCCESS":
      return {
        categoriesMovies: [...state.categoriesMovies, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_CATEGORY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_CATEGORY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "UPDATE_CATEGORY_SUCCESS":
      return {
        categoriesMovies: state.categoriesMovies?.map(
          (categoryMovies) =>
            categoryMovies._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_CATEGORY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_CATEGORY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "DELETE_CATEGORY_SUCCESS":
      return {
        categoriesMovies: state.categoriesMovies.filter(
          (catgoryMovies) => catgoryMovies._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "DELETE_CATEGORY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default CategoryReducer;
