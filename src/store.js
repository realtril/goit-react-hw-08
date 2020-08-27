import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import authReduser from "./reducers/authReducers";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";

const itemsReducer = combineReducers({
  items: reducers.items,
  filter: reducers.filter,
});

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: itemsReducer,
    auth: persistReducer(persistConfig, authReduser),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
