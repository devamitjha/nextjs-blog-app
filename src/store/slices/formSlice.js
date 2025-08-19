// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  shortDesc: "",
  description: "",
  image: null,
  tags: "",
  category: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
