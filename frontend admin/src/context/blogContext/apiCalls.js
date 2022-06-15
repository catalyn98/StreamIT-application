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
  } catch (error) {
    dispatch(createPostFailure());
  }
};

export const updatePost = async (id, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await axios.put("/news/" + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(updatePostSuccess(res.data));
  } catch (error) {
    dispatch(updatePostFailure());
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
  } catch (error) {
    dispatch(deletePostFailure());
  }
};
