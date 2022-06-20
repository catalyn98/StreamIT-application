import { createContext, useReducer } from "react";
import MyInformationsReducer from "./MyInformationsReducer";

const INITIAL_STATE = {
  user: [],
  isFetching: false,
  error: false,
};

export const MyInformationsContext = createContext(INITIAL_STATE);

export const MyInformationsContextProvider = ({ children }) => {
  const [state, dispatchUser] = useReducer(
    MyInformationsReducer,
    INITIAL_STATE
  );

  return (
    <MyInformationsContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatchUser,
      }}
    >
      {children}
    </MyInformationsContext.Provider>
  );
};
