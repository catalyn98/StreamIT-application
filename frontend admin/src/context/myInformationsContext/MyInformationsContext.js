import MyInformationsReducer from "./MyInformationsReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: [],
  isFetching: false,
  error: false,
};

export const MyInformationsContext = createContext(INITIAL_STATE);

export const MyInformationsContextProvider = ({ children }) => {
  const [state, dispatchMyInformations] = useReducer(
    MyInformationsReducer,
    INITIAL_STATE
  );

  return (
    <MyInformationsContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatchMyInformations,
      }}
    >
      {children}
    </MyInformationsContext.Provider>
  );
};
