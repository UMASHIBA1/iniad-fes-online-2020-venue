
// NOTE: 本番環境に切り替えるときはこのドメインを変えて
const baseUrl = process.env.REACT_APP_SERVER_HOST;

// NOTE: chat履歴
export const chatHistory = (roomId: string) => `https://${baseUrl}/api/chat/history?room_id=${roomId}`;


// NOTE: websocket
export const rootUrl = `wss://${baseUrl}/api/cable`;
export const chatRoomChannel = "RoomChannel";

// NOTE: room Data
export const roomApiUrl = `https://${baseUrl}/api/rooms/`;

// fusen
export const postFusenUrl = `https://${baseUrl}/api/chat/post`;

export const questionnairePost =(problem_id: string) => `https://${baseUrl}/api/questionnaires/${problem_id}/answer`;
