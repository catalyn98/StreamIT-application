import axios from "axios";
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  createCategoryStart,
  createCategorySuccess,
  createCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
} from "./CategoryAction";
import notifyError from "../../components/notify/notifyError";
import notifySuccess from "../../components/notify/notifySuccess";

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
    notifySuccess("Categoria de filme a fost creată cu succes.");
  } catch (error) {
    dispatch(createCategoryFailure());
    notifyError("Categoria de filme nu a putut fi creată.");
  }
};

export const updateCategoryMovies = async (categoriesMovies, dispatch) => {
  dispatch(updateCategoryStart());
  try {
    const res = await axios.put(
      "/categories-movies/" + categoriesMovies._id,
      categoriesMovies,
      {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    dispatch(updateCategorySuccess(res.data));
    notifySuccess("Categoria de filme a fost actualizată cu succes.");
  } catch (error) {
    dispatch(updateCategoryFailure());
    notifyError("Categoria de filme nu a putut fi actualizată.");
  }
};

export const deleteCategoryMovies = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete("/categories-movies/" + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deleteCategorySuccess(id));
    notifySuccess("Categoria de filme a fost ștearsă cu succes.");
  } catch (error) {
    dispatch(deleteCategoryFailure());
    notifyError("Categoria de filme nu a putut fi ștearsă.");
  }
};
