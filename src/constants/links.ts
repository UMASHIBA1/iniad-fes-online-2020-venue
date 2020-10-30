import Branded from "../typings/Branded";

export type LinkUrlType = Branded<string, "linkUrl">

export const links = {
  entrance: "/entrance" as LinkUrlType,
  hall: "/hall" as LinkUrlType,
  stair: (name: string) => `/stair/${name}` as LinkUrlType,
  road: (name: string) =>`/road/${name}` as LinkUrlType,
  elevatorFront: (name: string) => `/elevatorFront/${name}` as LinkUrlType,
  classroom: (name: string) => `/classroom/${name}` as LinkUrlType,
  schoolGate: "/" as LinkUrlType,
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


export type RoomUrlType = typeof links.entrance | typeof links.hall | ReturnType<typeof links.road> | ReturnType<typeof links.classroom> | ReturnType<typeof links.stair>;
