"use client"
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Add this line
import registerReducer from './registerReducer.jsx';
import loginReducer from './loginReducer.jsx';
import addProduct from './addProduct.jsx';
import orderAddress from "../../app/redux-toolkit/orderAddress.jsx";
import productId from './productId.jsx';
import logoutReducer from './logoutReducer.jsx';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    register: registerReducer,
    login : loginReducer,
    addProduct: addProduct,
    order: orderAddress,
    productId: productId,
    logout: logoutReducer
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
