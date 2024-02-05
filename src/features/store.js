import { configureStore } from "@reduxjs/toolkit";
import moveiReducer from "./movies/movieSlice";
export default configureStore({
  reducer: {
    movies: moveiReducer,
  },
});
