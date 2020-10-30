
// NOTE: 本番環境に切り替えるときはこのドメインを変えて
const baseUrl = "venue.iniadfes.com";

// NOTE: chat履歴
export const chatHistory = (roomId: string) => `https://${baseUrl}/api/chat/history?room_id=${roomId}`;


// NOTE: websocket
export const rootUrl = `wss://${baseUrl}/api/cable`;
export const chatRoomChannel = "RoomChannel";

// NOTE: room Data
export const roomApiUrl = `https://${baseUrl}/api/rooms/`;


export const questionnairePost =(problem_id: string) => `https://${baseUrl}/api/questionnaires/${problem_id}/answer`;
