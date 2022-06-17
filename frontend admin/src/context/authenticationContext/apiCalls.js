import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthenticationAction";
import notifyError from "../../components/notify/notifyError";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/user/login", user);
    res.data.user.role === "admin" && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
    notifyError("Adresa de email sau parola sunt greșite.");
  }
};
