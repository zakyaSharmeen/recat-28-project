import { createSlice } from '@reduxjs/toolkit'


export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    search: "",
  },
  reducers: {
    
    
    setSearch: (state, action) => {
        state.search = action.payload
      },
    


  },
})

// Action creators are generated for each case reducer function
export const { setSearch } = SearchSlice.actions

export default SearchSlice.reducer