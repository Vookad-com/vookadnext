import { configureStore } from '@reduxjs/toolkit'
import authCheckReducer from './fireAuth';

export default configureStore({
  reducer: {
    authCheck: authCheckReducer,
  },
})