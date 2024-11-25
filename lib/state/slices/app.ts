import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  initialized: boolean
}

const initialState: InitialState = {
  initialized: false
}

const defaultSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {
    init: (state) => {
      state.initialized = true
    },
    reset: (state) => {
      state.initialized = false
    }
  }
})

export const DefaultReducer = defaultSlice.reducer
export const DefaultActions = defaultSlice.actions