export const links = {
  home: "/" as "/",
  hall: "/hall" as "/hall",
  road: (name: string) =>`/road/${name}`,
  room: (name: string) => `/room/${name}`,
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


export type RoomUrlType = string;
