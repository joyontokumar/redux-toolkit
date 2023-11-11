import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import colorSlice from "./colorSlices";
import rememberSlice from "./rememberSlice";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const rootReducer = combineReducers({
  remember: rememberSlice,
  cart: cartSlice,
  switcher: colorSlice,
});
const createPersistConfig = (rememberMe: boolean) => ({
  key: "root",
  storage: rememberMe === true ? storage : sessionStorage,
});
const createPersistedReducer = (rememberMe: any) => {
  const persistConfig = createPersistConfig(rememberMe);
  return persistReducer(persistConfig, rootReducer);
};
const initialPersistConfig = createPersistConfig(false);
console.log("get initalPersistConfig", initialPersistConfig);
const persistedReducer = createPersistedReducer(initialPersistConfig);

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof rootReducer>;
export const persistor: any = persistStore(store);
