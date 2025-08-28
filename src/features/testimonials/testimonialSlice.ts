import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  generateTestimonials,
  Testimonial,
} from "../../mocks/generateTestimonialData";

type TestimonialsState = {
  items: Testimonial[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: TestimonialsState = {
  items: [],
  status: "idle",
};

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetch",
  async () => {
    // simulate a network delay
    await new Promise((r) => setTimeout(r, 600));
    return generateTestimonials(5);
  }
);

const slice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default slice.reducer;
