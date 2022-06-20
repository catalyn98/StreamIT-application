import axios from "axios";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateMyInformationsStart,
  updateMyInformationsSuccess,
  updateMyInformationsFailure,
} from "./MyInformationsAction";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

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

export const updateMyInformations = async (
  id,
  user,
  dispatchMyInformations
) => {
  dispatchMyInformations(updateMyInformationsStart());
  try {
    const res = await axios.put("/user/" + id, user, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchMyInformations(updateMyInformationsSuccess(res.data));
    notifySuccess("Detaliile contului au fost actualizate cu succes.");
  } catch (error) {
    dispatchMyInformations(updateMyInformationsFailure());
    notifyError("Detaliile contului nu au putut fi actualizate.");
  }
};
