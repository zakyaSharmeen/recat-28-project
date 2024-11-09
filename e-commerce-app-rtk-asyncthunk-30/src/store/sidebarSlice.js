import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOn: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    
    setSidebarOn: (state) => {
      state.isSidebarOn = true
    },
    setSidebarOff: (state) => {
        state.isSidebarOn = false
      },
  },
})

// Action creators are generated for each case reducer function
export const { setSidebarOn, setSidebarOff} = sidebarSlice.actions
export default sidebarSlice.reducer

export const getSidevarStatus = (state) => state.sidebar.isSidebarOn