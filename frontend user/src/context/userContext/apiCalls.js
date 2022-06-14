import axios from "axios";
import { getUsersStart, getUsersSuccess, getUsersFailure } from "./UserAction";

export const getMyInformation = async (dispatchUser) => {
  const objectID = JSON.parse(localStorage.getItem("user")).user._id;
  dispatchUser(getUsersStart());
  try {
    const res = await axios.get("/user/find/" + objectID, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchUser(getUsersSuccess(res.data));
  } catch (error) {
    dispatchUser(getUsersFailure());
  }
};
