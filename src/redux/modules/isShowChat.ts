import { createSlice } from "@reduxjs/toolkit";

const IsShowChat = createSlice({
  name: "isShowChat",
  initialState: false,
  reducers: {
    showChat: () => true,
    hideChat: () => false,
  },
});

export const { showChat, hideChat } = IsShowChat.actions;

export default IsShowChat.reducer;
