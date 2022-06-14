import MyInformationReducer from "./MyInformationReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: [],
  isFetching: false,
  error: false,
};

export const MyInformationContext = createContext(INITIAL_STATE);

export const MyInformationContextProvider = ({ children }) => {
  const [state, dispatchMyInformation] = useReducer(
    MyInformationReducer,
    INITIAL_STATE
  );

  return (
    <MyInformationContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatchMyInformation,
      }}
    >
      {children}
    </MyInformationContext.Provider>
  );
};
