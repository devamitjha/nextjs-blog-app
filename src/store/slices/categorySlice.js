// src/store/slices/categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { setCategories, setLoading, setError, clearCategories } =
  categorySlice.actions;

export default categorySlice.reducer;
