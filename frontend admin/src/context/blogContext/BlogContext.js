import BlogReducer from "./BlogReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: false,
};

export const BlogContext = createContext(INITIAL_STATE);

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, INITIAL_STATE);

  return (
    <BlogContext.Provider
      value={{
        posts: state.posts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
