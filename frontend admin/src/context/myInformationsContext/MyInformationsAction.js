export const getUserStart = () => ({
  type: "GET_USER_START",
});

export const getUserSuccess = (user) => ({
  type: "GET_USER_SUCCESS",
  payload: user,
});

export const getUserFailure = () => ({
  type: "GET_USER_FAILURE",
});

export const updateMyInformationsStart = () => ({
  type: "UPDATE_MY_INFORMATIONS_START",
});

export const updateMyInformationsSuccess = (user) => ({
  type: "UPDATE_MY_INFORMATIONS_SUCCESS",
  payload: user,
});

export const updateMyInformationsFailure = () => ({
  type: "UPDATE_MY_INFORMATIONS_FAILURE",
});
