const MyInformationsReducer = (state, action) => {
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

    case "UPDATE_MY_INFORMATIONS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "UPDATE_MY_INFORMATIONS_SUCCESS":
      return {
        users: state.users?.map(
          (user) => user._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_MY_INFORMATIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MyInformationsReducer;
