const MyInformationReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_START":
      return {
        user: [],
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
        user: [],
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MyInformationReducer;
