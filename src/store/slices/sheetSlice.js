import { createSlice } from '@reduxjs/toolkit'

const sheetSlice = createSlice({
  name: 'sheet',
  initialState: {
    activeSheet: null, // 'category' | 'login' | 'register'
  },
  reducers: {
    openSheet: (state, action) => {
      state.activeSheet = action.payload
    },
    closeSheet: (state) => {
      state.activeSheet = null
    },
    switchSheet: (state, action) => {
      state.activeSheet = null
    },
    setSheetAfterDelay: (state, action) => {
      state.activeSheet = action.payload
    },
  },
})

export const { openSheet, closeSheet, switchSheet, setSheetAfterDelay } = sheetSlice.actions
export default sheetSlice.reducer
