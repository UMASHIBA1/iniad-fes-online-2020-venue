export default interface ChatType {
  is_admin: boolean;
  is_circle_staff: boolean;
  text: string;
  time: {
    iso8601: string;
    timestamp: number;
  };
}
