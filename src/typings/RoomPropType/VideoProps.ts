export default interface VideoProps {
  start_at: {
    iso8601: string;
    timestamp: number;
  },
  url: string; // NOTE: e.g. /room1.m3u8
  mode: "streaming" | "mp4";
}
