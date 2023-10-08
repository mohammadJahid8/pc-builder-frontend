import { configureStore } from "@reduxjs/toolkit";
import pcBuildReducer from "./features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
  },
});
