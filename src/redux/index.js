import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './slicers/app';
import adminReducer from './slicers/adminSlice';


const combinedReducers = combineReducers({
  app: appReducer,
  admin:adminReducer,
});

const rootReducer = (state, action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;