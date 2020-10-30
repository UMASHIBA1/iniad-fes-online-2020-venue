export default interface VideoProps {
  url: string; // NOTE: e.g. /room1.m3u8
  mode: "streaming" | "mp4";
}
