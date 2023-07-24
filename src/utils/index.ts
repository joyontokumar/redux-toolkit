import storage from "redux-persist/es/storage";
export const logout = async () => {
  try {
    storage.removeItem("persist:root");
  } catch (e) {
    console.error("Error: logout", e);
  }
};
