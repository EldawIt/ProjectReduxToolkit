import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "./PostSlice/postsSlice";
import usersReducers from "./usersSlice/usersSlice"
export const store = configureStore({
  reducer: {
    posts: postsReducers,
    users:usersReducers
  },
});
