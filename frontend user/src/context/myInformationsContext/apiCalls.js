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

export const updateMyInformations = async (id, user, dispatchUser) => {
  dispatchUser(updateMyInformationsStart());
  try {
    const res = await axios.put("/user/" + id, user, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatchUser(updateMyInformationsSuccess(res.data));
    notifySuccess("Detaliile contului au fost actualizate cu succes.");
  } catch (error) {
    dispatchUser(updateMyInformationsFailure());
    notifyError("Detaliile contului nu au putut fi actualizate.");
  }
};

export const addMovieToWatchedMovies = async (movieId, user, dispatchUser) => {
  dispatchUser(updateMyInformationsStart());
  try {
    const res = await axios.put("/user/" + user._id + "/" + movieId, user, {
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
