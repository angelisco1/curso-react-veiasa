import { configureStore } from '@reduxjs/toolkit';
import { vendehumosReducer } from './vendehumos/index';

export const store = configureStore({
  reducer: {
    vendehumosReducer
  }
})