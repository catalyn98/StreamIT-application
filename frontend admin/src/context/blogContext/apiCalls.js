import axios from "axios";
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
} from "./BlogAction";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("/news/", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

export const createPost = async (post, dispatch) => {
  dispatch(createPostStart());
  try {
    const res = await axios.post("/news/", post, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(createPostSuccess(res.data));
    notifySuccess("Articolul a fost creat cu succes.");
  } catch (error) {
    dispatch(createPostFailure());
    notifyError("Articolul nu a putut fi creat.");
  }
};

export const updatePost = async (post, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await axios.put("/news/" + post._id, post, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(updatePostSuccess(res.data));
    notifySuccess("Articolul a fost actualizat cu succes.");
  } catch (error) {
    dispatch(updatePostFailure());
    notifyError("Articolul nu a putut fi actualizat.");
  }
};

export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    await axios.delete("/news/" + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deletePostSuccess(id));
    notifySuccess("Articolul a fost șters cu succes.");
  } catch (error) {
    dispatch(deletePostFailure());
    notifySuccess("Articolul nu a putut fi șters.");
  }
};
