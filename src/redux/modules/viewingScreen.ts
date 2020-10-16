import {createSlice} from "@reduxjs/toolkit";
import ViewingProp from "../../typings/ViewingProp";

const ViewingScreen = createSlice({
  name: "viewingScreen",
  initialState: "left" as ViewingProp,
  reducers: {
    toLeft: () => "left" as ViewingProp,
    toCenter: () => "center" as ViewingProp,
    toRight: () => "right" as ViewingProp
  }
});

export const {toLeft, toCenter, toRight} = ViewingScreen.actions;

export default ViewingScreen.reducer;
