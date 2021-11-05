import { configureStore } from '@reduxjs/toolkit'
import catimagesReducer from './catimagesSlice'

export const store = configureStore({
  reducer: {
    catimages: catimagesReducer,
  },
})
