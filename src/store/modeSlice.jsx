import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    change: (state) => {
        
        return !state;
      },
  },
})

export const { change } = modeSlice.actions

export default modeSlice.reducer