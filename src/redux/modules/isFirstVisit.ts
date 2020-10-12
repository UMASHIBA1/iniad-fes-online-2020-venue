import {createSlice} from "@reduxjs/toolkit";

const IsFirstVisit = createSlice({
  name: "isFirstVisit",
  initialState: true,
  reducers: {
    toVisited: () => false,
  },
});

export const {toVisited} = IsFirstVisit.actions;

export default IsFirstVisit.reducer;
