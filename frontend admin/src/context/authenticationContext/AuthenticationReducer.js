const AuthenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case "GET_USER_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "GET_USER_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_USER_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return { ...state };
  }
};

export default AuthenticationReducer;
