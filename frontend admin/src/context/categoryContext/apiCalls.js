import axios from "axios";
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  createCategoryStart,
  createCategorySuccess,
  createCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
} from "./CategoryAction";

export const getCategoriesMovies = async (dispatch) => {
  dispatch(getCategoriesStart());
  try {
    const res = await axios.get("/categories-movies/", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(getCategoriesSuccess(res.data));
  } catch (error) {
    dispatch(getCategoriesFailure());
  }
};

export const createCategoryMovies = async (categoriesMovies, dispatch) => {
  dispatch(createCategoryStart());
  try {
    const res = await axios.post("/categories-movies/", categoriesMovies, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(createCategorySuccess(res.data));
  } catch (error) {
    dispatch(createCategoryFailure());
  }
};

export const deleteCategoryMovie = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete("/categories-movies/" + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deleteCategorySuccess(id));
  } catch (error) {
    dispatch(deleteCategoryFailure());
  }
};
