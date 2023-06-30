import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartReducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "cart",
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
})
const persistor = persistStore(store)

export { store, persistor }
