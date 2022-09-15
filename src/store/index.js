import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/slice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
