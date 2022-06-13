import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthenticationAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/user/login", user);
    res.data.user.role === "admin" && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
