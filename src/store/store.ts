import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import colorSlice from "./colorSlices";
// import storageTypeSlice from "./storageTypeSlice";
import registeredUserSlice from "./userSlice";
const generatePersistConfig = (
  storageType: "localStorage" | "sessionStorage"
) => ({
  key: "root",
  storage: storageType === "sessionStorage" ? sessionStorage : storage,
  blacklist: ["registerOTPSlice"],
});

const rootReducer = combineReducers({
  cart: cartSlice,
  switcher: colorSlice,
  // storageType: storageTypeSlice,
  user: registeredUserSlice,
});

const initialPersistConfig = generatePersistConfig(
  window.localStorage.getItem("persist:root")?.length
    ? "localStorage"
    : "sessionStorage"
);
const persistedReducer = persistReducer(initialPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: ["persist/PERSIST"],
        ignoredActions: ["FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE"],
      },
    }),
});

export const createStore = (newStorageType: any) => {
  // const prevStorage = store.getState().storageType.storageType;
  const prevStorage = window.localStorage.getItem("persist:root")?.length
    ? true
    : false;
  if (prevStorage) {
    sessionStorage.removeItem("persist:root");
  }
  if (!prevStorage) {
    localStorage.removeItem("persist:root");
  }
  const persistConfig = generatePersistConfig(newStorageType);
  const updatedPersistedReducer = persistReducer(persistConfig, rootReducer);
  store.replaceReducer(updatedPersistedReducer);
};

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
