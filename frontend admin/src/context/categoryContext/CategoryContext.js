import { createContext, useReducer } from "react";
import CategoryReducer from "./CategoryReducer";

const INITIAL_STATE = {
  categoriesMovies: [],
  isFetching: false,
  error: false,
};

export const CategoryContext = createContext(INITIAL_STATE);

export const CategoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, INITIAL_STATE);

  return (
    <CategoryContext.Provider
      value={{
        categoriesMovies: state.categoriesMovies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
