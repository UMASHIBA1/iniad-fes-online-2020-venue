import {createSlice} from "@reduxjs/toolkit";

const ViewingScreen = createSlice({
  name: "viewingScreen",
  initialState: "left",
  reducers: {
    toLeft: () => "left",
    toCenter: () => "center",
    toRight: () => "right"
  }
});

export const {toLeft, toCenter, toRight} = ViewingScreen.actions;

export default ViewingScreen.reducer;
