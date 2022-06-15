import axios from "axios";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateMyInformationsStart,
  updateMyInformationsSuccess,
  updateMyInformationsFailure,
} from "./MyInformationsAction";

export const getMyInformations = async (dispatchUser) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  dispatchUser(getUserStart());
  try {
    const res = await axios.get("/user/find/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchUser(getUserSuccess(res.data));
  } catch (error) {
    dispatchUser(getUserFailure());
  }
};

export const updateMyInformations = async (dispatchUser) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  dispatchUser(updateMyInformationsStart());
  try {
    const res = await axios.patch("/user/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchUser(updateMyInformationsSuccess(res.data));
  } catch (error) {
    dispatchUser(updateMyInformationsFailure());
  }
};
