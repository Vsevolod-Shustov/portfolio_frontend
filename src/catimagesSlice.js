import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  images: null,
}

export const catimagesSlice = createSlice({
  name: 'catimages',
  initialState,
  reducers: {
    set: (state, action) => {
      //console.log("catimagesSlice is setting");
      //console.log("state before:");console.log(state);
      state.images = action.payload;
      //console.log("state after:");console.log(state);
    }
  }
})

export const { set } = catimagesSlice.actions

export default catimagesSlice.reducer
