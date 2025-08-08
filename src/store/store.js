// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import sheetReducer from './slices/sheetSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sheet: sheetReducer,
  },
})
