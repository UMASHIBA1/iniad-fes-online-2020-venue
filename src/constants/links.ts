export const links = {
  home: "/",
  road: "/road",
  hall: "/hall",
  room: "/room",
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
