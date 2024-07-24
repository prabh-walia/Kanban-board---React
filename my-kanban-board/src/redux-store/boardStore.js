import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    selectedBoardId: 'board-1',
  },
  reducers: {
    selectBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },
  },
});

export const { selectBoard } = boardSlice.actions;
export default boardSlice.reducer;