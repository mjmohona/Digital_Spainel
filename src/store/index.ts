import { configureStore } from "@reduxjs/toolkit";
import testimonialReducer from "../features/testimonials/testimonialSlice";

export const store = configureStore({
  reducer: {
    testimonials: testimonialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
