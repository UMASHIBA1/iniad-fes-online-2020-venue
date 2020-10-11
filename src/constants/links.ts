export const links = {
  entrance: "/" as "/",
  hall: "/hall" as "/hall",
  road: (name: string) =>`/road/${name}`,
  classroom: (name: string) => `/classroom/${name}`,
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
