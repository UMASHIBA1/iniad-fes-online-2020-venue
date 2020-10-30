import { createSlice } from "@reduxjs/toolkit";

const fusenRoomId = createSlice({
  name: "fusenRoomId",
  initialState: "",
  reducers: {
    changeRoomId: (roomId: string) => roomId
  },
});

export const { changeRoomId } = fusenRoomId.actions;

export default fusenRoomId.reducer;
