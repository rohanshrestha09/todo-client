import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modal';

const store = configureStore({
   reducer: {
      modal: modalReducer,
   },
});

export default store;

declare global {
   type RootState = ReturnType<typeof store.getState>;
}

export type AppDispatch = typeof store.dispatch;
