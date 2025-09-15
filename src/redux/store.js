import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // 👈 use session storage
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import { api } from './api/api';
import { professionalApi } from './api/Professional/professionalApi';

const persistConfig = {
  key: 'root',
  storage: sessionStorage, // 👈 session storage here
  whitelist: ['auth'], // only auth will persist
};

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
  [professionalApi.reducerPath]: professionalApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(api.middleware, professionalApi.middleware),
});

export const persistor = persistStore(store);
