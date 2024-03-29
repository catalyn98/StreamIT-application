import axios from "axios";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
} from "./MovieAction";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movie/", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movie/", movie, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(createMovieSuccess(res.data));
    notifySuccess("Filmul a fost creat cu succes.");
  } catch (error) {
    dispatch(createMovieFailure());
    notifyError("Filmul nu a putut fi creat.");
  }
};

export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put("/movie/" + movie._id, movie, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(updateMovieSuccess(res.data));
    notifySuccess("Filmul a fost actualizat cu succes.");
  } catch (error) {
    dispatch(updateMovieFailure);
    notifyError("Filmul nu a putut fi actualizat.");
  }
};

export const deleteMovie = async (ids, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movie/" + ids.movieId, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
      data: {
        ids: ids.categoryId && ids.categoryId,
      },
    });
    dispatch(deleteMovieSuccess(ids.movieId));
    notifySuccess("Filmul a fost șters cu succes.");
  } catch (error) {
    dispatch(deleteMovieFailure());
    notifyError("Filmul nu a putut fi șters.");
  }
};
