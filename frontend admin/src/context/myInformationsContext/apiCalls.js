import axios from "axios";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateMyInformationsStart,
  updateMyInformationsSuccess,
  updateMyInformationsFailure,
} from "./MyInformationsAction";

export const getMyInformations = async (dispatchMyInformations) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  dispatchMyInformations(getUserStart());
  try {
    const res = await axios.get("/user/find/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchMyInformations(getUserSuccess(res.data));
  } catch (error) {
    dispatchMyInformations(getUserFailure());
  }
};

export const updateMyInformations = async (dispatchMyInformations) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  const t = {
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")),
    },
    token: JSON.parse(localStorage.getItem("user")).token,
  };
  console.log(t);
  console.log("Before start");
  dispatchMyInformations(updateMyInformationsStart());
  console.log("After start");
  try {
    const res = await axios.patch("/user/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    console.log("Before update");
    dispatchMyInformations(updateMyInformationsSuccess(res.data));
    console.log("After update");
  } catch (error) {
    console.log("Encountered a problem");
    dispatchMyInformations(updateMyInformationsFailure());
  }
};
