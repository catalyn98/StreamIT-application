export const getCategoriesStart = () => ({
  type: "GET_CATEGORIES_START",
});

export const getCategoriesSuccess = (categoriesMovies) => ({
  type: "GET_CATEGORIES_SUCCESS",
  payload: categoriesMovies,
});

export const getCategoriesFailure = () => ({
  type: "GET_CATEGORIES_FAILURE",
});

export const createCategoryStart = () => ({
  type: "CREATE_CATEGORY_START",
});

export const createCategorySuccess = (categoriesMovies) => ({
  type: "CREATE_CATEGORY_SUCCESS",
  payload: categoriesMovies,
});

export const createCategoryFailure = () => ({
  type: "CREATE_CATEGORY_FAILURE",
});

export const updateCategoryStart = () => ({
  type: "UPDATE_CATEGORY_START",
});

export const updateCategorySuccess = (categoriesMovies) => ({
  type: "UPDATE_CATEGORY_SUCCESS",
  payload: categoriesMovies,
});

export const updateCategoryFailure = () => ({
  type: "UPDATE_CATEGORY_FAILURE",
});

export const deleteCategoryStart = () => ({
  type: "DELETE_CATEGORY_START",
});

export const deleteCategorySuccess = (id) => ({
  type: "DELETE_CATEGORY_SUCCESS",
  payload: id,
});

export const deleteCategoryFailure = () => ({
  type: "DELETE_CATEGORY_FAILURE",
});
