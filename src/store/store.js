// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import sheetReducer from './slices/sheetSlice'
import formReducer from "./slices/formSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sheet: sheetReducer,
    form: formReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 🚨 disables serializable warning
    }),
})
