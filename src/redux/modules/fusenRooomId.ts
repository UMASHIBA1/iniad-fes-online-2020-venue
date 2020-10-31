import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const fusenRoomId = createSlice({
  name: "fusenRoomId",
  initialState: "",
  reducers: {
    changeRoomId: (_state, action: PayloadAction<string>) => action.payload,
  },
});

export const { changeRoomId } = fusenRoomId.actions;

export default fusenRoomId.reducer;
