import { createSlice } from '@reduxjs/toolkit'

export const authCheckSlice = createSlice({
  name: 'authCheck',
  initialState: {
    auth: false,
    name: '',
    email: '',
    phone: '',
    id: '',
  },
  reducers: {
    load: (state, action) => {
      state.auth = action.payload.auth
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.id = action.payload.id
    },
  },
})

// Action creators are generated for each case reducer function
export const { load } = authCheckSlice.actions

export default authCheckSlice.reducer