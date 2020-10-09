export const links = {
  home: "/" as "/",
  road: "/road" as "/road",
  hall: "/hall" as "/hall",
  room: "/room" as "/room",
};

// NOTE: もしpcのみに存在するページとかができたときexport先で一個一個書き換えるのがいやなので先にpcLinkとmobileLinksを分けます。
export const pcLinks = {
  ...links
}

export const mobileLinks = {
  ...links
}

export const bothLinks = {
  ...pcLinks,
  ...mobileLinks,
}


export type RoomUrlType = typeof bothLinks[keyof typeof bothLinks];
