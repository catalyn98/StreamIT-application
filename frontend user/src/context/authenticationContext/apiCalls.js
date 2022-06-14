import axios from "axios";
import { loginStart, loginSuccess } from "./AuthenticationAction";
import notifyError from "../../components/notify/notifyError";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/user/login/", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(notifyError("Adresa de email sau parola sunt greșite."));
  }
};
