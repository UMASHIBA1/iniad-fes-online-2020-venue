import { links } from "../constants/links";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";
import igc2Sumbnail from "../statics/igc2-sumbnail.png";

const sampleObj = {
  url: "example.com",
  name: "example",
};


const roomDatas: RoomAPIType = [
  // entrance
  {
    type: "entrance",
    name: "entrance-1",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001,
      },
      url: "example.com",
      mode: "mp4",
    },
    environment_attributes: {
      door: {
        url: links.elevatorFront("3f"),
        title: "3Fエレベーター前",
      },
    },
  },
  // elevatorFront
  {
    type: "elevatorFront",
    name: "3f",
    environment_attributes: {
      roadx1xx: {
        url: links.road("3101"),
        title: "3階廊下1",
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール",
      },
      back: {
        url: links.stair("3f"),
        title: "3階階段",
      },
    },
  },
  {
    type: "elevatorFront",
    name: "4f",
    environment_attributes: {
      roadx1xx: {
        url: links.road("4101"),
        title: "4階廊下1",
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール",
      },
      back: {
        url: links.stair("4f"),
        title: "4階階段",
      },
    },
  },
  // stair
  {
    type: "stair",
    name: "3f",
    environment_attributes: {
      up: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前",
      },
      down: {
        url: links.entrance,
        title: "エントランス",
      },
      room: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前",
      },
    },
  },
  {
    type: "stair",
    name: "4f",
    environment_attributes: {
      down: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前",
      },
      room: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前",
      },
    },
  },
  // road
  {
    type: "road",
    name: "3101",
    environment_attributes: {
      mode: "front",
      back: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前",
      },
      next: {
        url: links.road("3102"),
        title: "3階廊下2",
      },
      doorLeft1: {
        url: links.classroom("3110"),
        title: "INIActors",
      },
      doorRight1: {
        url: links.classroom("3109"),
        title: "実行委員",
      },
    },
  },
  {
    type: "road",
    name: "3102",
    environment_attributes: {
      mode: "center",
      back: {
        url: links.road("3101"),
        title: "3階廊下1",
      },
      next: {
        url: links.road("3103"),
        title: "3階廊下3",
      },
      doorLeft1: {
        url: links.classroom("3106"),
        title: "Web研究会",
      },
      doorRight1: {
        url: links.classroom("3105"),
        title: "DigiHealth",
      },
    },
  },
  {
    type: "road",
    name: "3103",
    environment_attributes: {
      mode: "end",
      back: {
        url: links.road("3102"),
        title: "3階廊下2",
      },
      next: {
        url: links.hall,
        title: "ホール",
      },
      doorLeft1: {
        url: links.classroom("3102"),
        title: "INIAD Minecraft",
      },
      doorRight1: {
        url: links.classroom("3101"),
        title: "INIAD Developers",
      },
    },
  },
  {
    type: "road",
    name: "4101",
    environment_attributes: {
      mode: "front",
      back: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前",
      },
      next: {
        url: links.road("4102"),
        title: "4階廊下2",
      },
      doorLeft1: {
        url: links.classroom("4110"),
        title: "IGC2",
      },
      doorRight1: {
        url: links.classroom("4109"),
        title: "ID/graph",
      },
    },
  },
  {
    type: "road",
    name: "4102",
    environment_attributes: {
      mode: "center",
      back: {
        url: links.road("4101"),
        title: "4階廊下1",
      },
      next: {
        url: links.road("4103"),
        title: "4階廊下3",
      },
      doorLeft1: {
        url: links.classroom("4106"),
        title: "RAISON DETRE",
      },
      doorRight1: {
        url: links.classroom("4105"),
        title: "TATFO",
      },
    },
  },
  {
    type: "road",
    name: "4103",
    environment_attributes: {
      mode: "end",
      back: {
        url: links.road("4102"),
        title: "4階廊下2",
      },
      next: {
        url: links.classroom("4100"),
        title: "Art Works",
      },
      doorLeft1: {
        url: links.classroom("4102"),
        title: "Hello Vietnam",
      },
      doorRight1: {
        url: links.classroom("4101"),
        title: "Noah's Ark",
      },
    },
  },
  // classroom
  {
    type: "classroom",
    name: "3110",
    environment_attributes: {
      door: {
        title: "3階廊下1",
        url: links.road("3101"),
      },
      mode: "video",
      VideoProps: {
        url: "https://bento-api-test.herokuapp.com/movie.mp4",
        mode: "mp4",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
    },
  },
  {
    type: "classroom",
    name: "3109",
    environment_attributes: {
      door: {
        title: "3階廊下1",
        url: links.road("3101"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "3106",
    environment_attributes: {
      door: {
        title: "3階廊下2",
        url: links.road("3102"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "3105",
    environment_attributes: {
      door: {
        title: "3階廊下2",
        url: links.road("3102"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "3102",
    environment_attributes: {
      door: {
        title: "3階廊下3",
        url: links.road("3103"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "3101",
    environment_attributes: {
      door: {
        title: "3階廊下3",
        url: links.road("3103"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "4110",
    environment_attributes: {
      door: {
        title: "4階廊下1",
        url: links.road("4101"),
      },
      mode: "igc2",
      gameLink: "https://igc2.jp/exhibition/",
      title: "igc2 ゲーム",
      video: {
        mode: "streaming",
        url: "https://bento-api-test.herokuapp.com/test/video.m3u8",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
        imgPath: igc2Sumbnail,
    },
  },
  {
    type: "classroom",
    name: "4109",
    environment_attributes: {
      door: {
        title: "4階廊下1",
        url: links.road("4101"),
      },
      mode: "photoList",
      title: "ID/graph",
      description: "ID/graphです！私たちがとった写真を是非見ていってください！",
      photos: [
        {
          sns: "twitter",
          tweetId: "1313082319150837760",
        },
        {
          sns: "twitter",
          tweetId: "1313056707556249602",
        },
        {
          sns: "twitter",
          tweetId: "1297489002572857347",
        },
        {
          sns: "instagram",
          instagramLink: "https://www.instagram.com/p/B37KdHpnnDG/",
        },
        {
          sns: "twitter",
          tweetId: "1317668126276734976",
        },
        {
          sns: "instagram",
          instagramLink: "https://www.instagram.com/p/CGPUaQoHz_X/",
        },
        {
          sns: "instagram",
          instagramLink: "https://www.instagram.com/p/B4PGXswnGGN/",
        },
        {
          sns: "instagram",
          instagramLink: "https://www.instagram.com/p/CGPUaQoHz_X/",
        },
      ],
    },
  },
  {
    type: "classroom",
    name: "4106",
    environment_attributes: {
      door: {
        title: "4階廊下2",
        url: links.road("4102"),
      },
      mode: "musics",
      musicIframes: [
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734545279&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/phillplay" title="Phillplay" target="_blank" style="color: #cccccc; text-decoration: none;">Phillplay</a> · <a href="https://soundcloud.com/phillplay/phill-second-set" title="Pioneer Moscow" target="_blank" style="color: #cccccc; text-decoration: none;">Pioneer Moscow</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/896801923&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jun-honda-3" title="JUUNN" target="_blank" style="color: #cccccc; text-decoration: none;">JUUNN</a> · <a href="https://soundcloud.com/jun-honda-3/claris-cheers-punk-goes-pop-style-easycore-poppunk-remix" title="はたらく細胞 ClariS - CheerS  (Punk Goes Pop Style / Easycore Poppunk Remix )" target="_blank" style="color: #cccccc; text-decoration: none;">はたらく細胞 ClariS - CheerS  (Punk Goes Pop Style / Easycore Poppunk Remix )</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/591087501&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mugatunesofficial" title="MugaTunes" target="_blank" style="color: #cccccc; text-decoration: none;">MugaTunes</a> · <a href="https://soundcloud.com/mugatunesofficial/sets/audible-adderall-14" title="Study, Chill, Relax, Gaming ~ Audible Adderall #14" target="_blank" style="color: #cccccc; text-decoration: none;">Study, Chill, Relax, Gaming ~ Audible Adderall #14</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206559958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/silkmusic" title="Silk Music" target="_blank" style="color: #cccccc; text-decoration: none;">Silk Music</a> · <a href="https://soundcloud.com/silkmusic/silksf099-1" title="Delectatio - Numinous [Silk Music]" target="_blank" style="color: #cccccc; text-decoration: none;">Delectatio - Numinous [Silk Music]</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265040990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/otto-knows" title="Otto Knows" target="_blank" style="color: #cccccc; text-decoration: none;">Otto Knows</a> · <a href="https://soundcloud.com/otto-knows/otto-knows-ft-avicii-back-where-i-belong" title="Otto Knows ft. Avicii - Back Where I Belong" target="_blank" style="color: #cccccc; text-decoration: none;">Otto Knows ft. Avicii - Back Where I Belong</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169508644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thefatrat" title="TheFatRat" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat</a> · <a href="https://soundcloud.com/thefatrat/thefatrat-unity-1" title="TheFatRat - Unity" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat - Unity</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169508644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thefatrat" title="TheFatRat" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat</a> · <a href="https://soundcloud.com/thefatrat/thefatrat-unity-1" title="TheFatRat - Unity" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat - Unity</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169508644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thefatrat" title="TheFatRat" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat</a> · <a href="https://soundcloud.com/thefatrat/thefatrat-unity-1" title="TheFatRat - Unity" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat - Unity</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169508644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thefatrat" title="TheFatRat" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat</a> · <a href="https://soundcloud.com/thefatrat/thefatrat-unity-1" title="TheFatRat - Unity" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat - Unity</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169508644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thefatrat" title="TheFatRat" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat</a> · <a href="https://soundcloud.com/thefatrat/thefatrat-unity-1" title="TheFatRat - Unity" target="_blank" style="color: #cccccc; text-decoration: none;">TheFatRat - Unity</a></div>',
      ],
    },
  },
  {
    type: "classroom",
    name: "4105",
    environment_attributes: {
      door: {
        title: "4階廊下2",
        url: links.road("4102"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "4102",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "4101",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
  {
    type: "classroom",
    name: "4100",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
];
export default roomDatas;
