import { links } from "../constants/links";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";
import igc2Sumbnail from "../statics/igc2-sumbnail.png";
import iniadfesLogoIcon from "../statics/svgs/iniadfes-logo.svg"
import navGatorsIcon from "../statics/circleIcons/12_uprgb_anime_noise3_4x - Takuya UWANO.png"
import btlIcon from "../statics/circleIcons/BTL - Ritsu ISHI.png"
import digiHealth from "../statics/circleIcons/Digi×Health - Natsuki OKAYASU.png"
import raisonDetleIcon from "../statics/circleIcons/icon - Hayato FUKUI.png"
import idgraphIcon from "../statics/circleIcons/IDgraph_20201013 - Mari TAKEBA.png"
import IGC2Icon from "../statics/circleIcons/IGC2 - Masaki ASAO.png"
import iniactorsIcon from "../statics/circleIcons/INIActors_2 - Yuri MAEDA.png"
import iniadTimesIcon from "../statics/circleIcons/INIAD Times icon - Ayame TATEMATSU.svg"
import tatfoIcon from "../statics/circleIcons/INIAD-FES-2020-TATFO-02 - Haruki UMEDA.png"
import iniadGrassIcon from "../statics/circleIcons/INIADGrass200 - Ryota TOKUNAGA.png"
import iniadTutorialIcon from "../statics/circleIcons/INIADTUTORIAL_logo_200 - Akira MIYAMOTO.png"
import hoasenIcon from "../statics/circleIcons/logo hoa sen - LUONG NGUYEN VAN.png"
import noahsArkIcon from "../statics/circleIcons/Noah_s Ark_ logo - Takuma Sunohara.png"
import quizIcon from "../statics/circleIcons/quiz - Kensuke SUZUKI.png"

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
        imgPath: iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール",
        imgPath:iniadfesLogoIcon
      },
      back: {
        url: links.stair("3f"),
        title: "3階階段",
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール",
        imgPath:iniadfesLogoIcon
      },
      back: {
        url: links.stair("4f"),
        title: "4階階段",
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      down: {
        url: links.entrance,
        title: "エントランス",
        imgPath:iniadfesLogoIcon
      },
      room: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前",
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      room: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前",
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.road("3102"),
        title: "3階廊下2",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("3110"),
        title: "INIActors",
        imgPath:iniactorsIcon
      },
      doorRight1: {
        url: links.classroom("3109"),
        title: "実行委員",
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.road("3103"),
        title: "3階廊下3",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("3106"),
        title: "Web研究会",
        imgPath:iniadTimesIcon
      },
      doorRight1: {
        url: links.classroom("3105"),
        title: "DigiHealth",
        imgPath:digiHealth
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.hall,
        title: "ホール",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("3102"),
        title: "INIAD Minecraft",
        imgPath:iniadGrassIcon
      },
      doorRight1: {
        url: links.classroom("3101"),
        title: "INIAD Developers",
        imgPath:iniadTutorialIcon
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.road("4102"),
        title: "4階廊下2",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("4110"),
        title: "IGC2",
        imgPath:IGC2Icon
      },
      doorRight1: {
        url: links.classroom("4109"),
        title: "ID/graph",
        imgPath:idgraphIcon
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.road("4103"),
        title: "4階廊下3",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("4106"),
        title: "RAISON DETRE",
        imgPath:raisonDetleIcon
      },
      doorRight1: {
        url: links.classroom("4105"),
        title: "TATFO",
        imgPath:tatfoIcon
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
        imgPath:iniadfesLogoIcon
      },
      next: {
        url: links.classroom("4100"),
        title: "Art Works",
        imgPath:iniadfesLogoIcon
      },
      doorLeft1: {
        url: links.classroom("4102"),
        title: "Hello Vietnam",
        imgPath:hoasenIcon
      },
      doorRight1: {
        url: links.classroom("4101"),
        title: "Noah's Ark",
        imgPath:noahsArkIcon
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
        imgPath:iniadfesLogoIcon
      },
      mode: "video",
      title: "INIActors",
      description: "※劇場でやるよ、気を付けてね！",
      VideoProps: [
        {
        url: "https://bento-api-test.herokuapp.com/movie.mp4",
        mode: "mp4",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
              {
        url: "https://bento-api-test.herokuapp.com/movie.mp4?aaa=a",
        mode: "mp4",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
              {
        url: "https://bento-api-test.herokuapp.com/movie.mp4?aaa=b",
        mode: "mp4",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
              {
        url: "https://bento-api-test.herokuapp.com/movie.mp4?aaa=c",
        mode: "mp4",
        start_at: {
          iso8601: "2020-10-31T10:00:00+09:00",
          timestamp: 1604106000,
        },
      },
    ]
    },
  },
  {
    type: "classroom",
    name: "3109",
    environment_attributes: {
      door: {
        title: "3階廊下1",
        url: links.road("3101"),
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      title: "RAISON DETRE",
      mode: "musics",
      pickUpIframes: [
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887618911&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/rydeen-summer-beach-remix" title="RYDEEN (Summer Beach Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">RYDEEN (Summer Beach Remix)</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887617879&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/rydeen-ver" title="RYDEEN Orchestra style" target="_blank" style="color: #cccccc; text-decoration: none;">RYDEEN Orchestra style</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887616274&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/midnight-rydeen-city" title="Midnight Rydeen City" target="_blank" style="color: #cccccc; text-decoration: none;">Midnight Rydeen City</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887614282&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/0731-rydeentaguchi-ren-taguchi" title="RYDEEN ～iroiro short remix～" target="_blank" style="color: #cccccc; text-decoration: none;">RYDEEN ～iroiro short remix～</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887612497&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/rydeen" title="RYDEEN (応援曲アレンジ)" target="_blank" style="color: #cccccc; text-decoration: none;">RYDEEN (応援曲アレンジ)</a></div>',
      ],
      musicIframes: [
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912471097&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/ineffable-logic" title="Ineffable logic" target="_blank" style="color: #cccccc; text-decoration: none;">Ineffable logic</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912470191&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/pipeline" title="Pipeline" target="_blank" style="color: #cccccc; text-decoration: none;">Pipeline</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912469822&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/s04mhrjeabcw" title="セピア色のスピークイージー" target="_blank" style="color: #cccccc; text-decoration: none;">セピア色のスピークイージー</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912469138&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/board-game" title="Board Game !" target="_blank" style="color: #cccccc; text-decoration: none;">Board Game !</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912468148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/1eiye1yock3u" title="収穫祭" target="_blank" style="color: #cccccc; text-decoration: none;">収穫祭</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912467110&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/opvkbepinv9h" title="浜辺の朝の夢" target="_blank" style="color: #cccccc; text-decoration: none;">浜辺の朝の夢</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861854836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/our-bromance" title="Our bromance" target="_blank" style="color: #cccccc; text-decoration: none;">Our bromance</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861853681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/silent-fight-song" title="Silent Fight Song" target="_blank" style="color: #cccccc; text-decoration: none;">Silent Fight Song</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861853468&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/reverse-solidus" title="Reverse Solidus" target="_blank" style="color: #cccccc; text-decoration: none;">Reverse Solidus</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861853141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/niwdhnlbn81g" title="羨望" target="_blank" style="color: #cccccc; text-decoration: none;">羨望</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861852700&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/90ilwxmzh87s" title="おほしさま" target="_blank" style="color: #cccccc; text-decoration: none;">おほしさま</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861851707&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/deep-high" title="Deep High" target="_blank" style="color: #cccccc; text-decoration: none;">Deep High</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861851515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/in-to-the-midnight" title="In To The Midnight" target="_blank" style="color: #cccccc; text-decoration: none;">In To The Midnight</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861851323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/witching-hour" title="Witching Hour..." target="_blank" style="color: #cccccc; text-decoration: none;">Witching Hour...</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861849421&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/gebunden-reflection" title="Gebunden Reflection" target="_blank" style="color: #cccccc; text-decoration: none;">Gebunden Reflection</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861847438&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/before-daylight-2019-mix" title="Before Daylight (2019 Mix)" target="_blank" style="color: #cccccc; text-decoration: none;">Before Daylight (2019 Mix)</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861836455&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/n4kd-sp4rk" title="N4KﾖD SP4RK" target="_blank" style="color: #cccccc; text-decoration: none;">N4KﾖD SP4RK</a></div>',
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861834823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raison-detere" title="RAISON DÊTRE" target="_blank" style="color: #cccccc; text-decoration: none;">RAISON DÊTRE</a> · <a href="https://soundcloud.com/raison-detere/out-of-clamor" title="out of clamor" target="_blank" style="color: #cccccc; text-decoration: none;">out of clamor</a></div>',
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
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
        imgPath:iniadfesLogoIcon
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
  },
];
export default roomDatas;
