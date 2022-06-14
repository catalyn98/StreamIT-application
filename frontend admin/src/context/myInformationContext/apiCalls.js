import axios from "axios";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "./MyInformationAction";

export const getMyInformation = async (dispatchMyInformation) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  dispatchMyInformation(getUserStart());
  try {
    const res = await axios.get("/user/find/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchMyInformation(getUserSuccess(res.data));
  } catch (error) {
    dispatchMyInformation(getUserFailure());
  }
};
