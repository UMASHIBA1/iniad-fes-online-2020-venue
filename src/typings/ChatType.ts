export default interface ChatType {
  is_admin: boolean;
  is_circle_staff: boolean;
  text: string;
  time: {
    iso8601: string;
    timestamp: number;
  };
}

export interface ChatAPIType {
  type: "chat";
  payload: ChatType;
}

export interface ChatPostType {
  payload: {
  room_id: string;
  text: string;
  },
  type: "chat"
}

export interface ChatHistoryType {
  status: string;
  payload: {
    history: ChatType[];
  }
}
