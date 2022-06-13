const BlogReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS_START":
      return {
        posts: [],
        isFetching: true,
        error: false,
      };

    case "GET_POSTS_SUCCESS":
      return {
        posts: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_POSTS_FAILURE":
      return {
        posts: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_POST_SUCCESS":
      return {
        posts: [...state.posts, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "UPDATE_POST_SUCCESS":
      return {
        posts: state.posts.map(
          (post) => post._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "DELETE_POST_SUCCESS":
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case "DELETE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default BlogReducer;
