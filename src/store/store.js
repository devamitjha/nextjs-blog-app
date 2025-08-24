// store/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import counterReducer from './slices/counterSlice'
import sheetReducer from './slices/sheetSlice'
import formReducer from "./slices/formSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";

// combine all reducers
  const rootReducer = combineReducers({
    counter: counterReducer,
    sheet: sheetReducer,
    form: formReducer,
    category: categoryReducer,
    cart: cartReducer, 
  });

// persist config
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], 
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);



