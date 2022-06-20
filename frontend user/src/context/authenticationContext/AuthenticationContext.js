import { useReducer, createContext, useEffect } from "react";
import AuthenticationReducer from "./AuthenticationReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: true,
  error: false,
};

export const AuthenticationContext = createContext(INITIAL_STATE);

export const AuthenticationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthenticationContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
