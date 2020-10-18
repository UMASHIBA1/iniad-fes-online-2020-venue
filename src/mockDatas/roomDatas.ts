import { links } from "../constants/links";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";

const sampleObj = {
  url: "example.com",
  name: "example",
};

const sampleVideo: ClassRoomProps["video"] = {
  start_at: {
    iso8601: "2020-10-31T10:00:00+09:00",
    timestamp: 1604106001,
  },
  url: "example.com",
  mode: "mp4"
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
      mode: "mp4"
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
          timestamp: 1604106000
        }
      }
    },
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
  },
  {
    type: "classroom",
    name: "4110",
    environment_attributes: {
      door: {
        title: "4階廊下1",
        url: links.road("4101"),
      },
      mode: "oneObj",
      obj1: sampleObj,
    },
    video: sampleVideo,
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
      description: "sample description",
      photoIframes: [
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGcPlQYHyeW/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGcPlQYHyeW/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGcPlQYHyeW/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">【なぜプロはわざわざ要素を重ねるのか？】﻿ ﻿ 文字や図形、写真をわざわざ重ねたデザインを見たことはありませんか？﻿ ﻿ どんなデザインにもわざと重ねるテクニックは使えます！﻿ あえて重ねる理由は2つほどあります。﻿ ﻿ 重ねることで視覚的に上下の位置関係を生み、デザインに奥行きと立体感が！﻿ 重ならないと上下の位置関係は分かりません﻿ ﻿ そしてもう一つがスペースの確保ができます！重ねることで余白が生まれる。﻿ 奥行き・立体感・余白を生むということですね﻿ ﻿ ﻿ 【まとめ1】﻿ ﻿ 文字・図形・写真・イラスト﻿ これらをわざわざ﻿ 重ねてみよう﻿ ﻿ ﻿ 【まとめ2】﻿ ﻿ 重ねることにより﻿ 奥行き・立体感・余白を﻿ 生むことができます﻿ ﻿ ﻿ インスタ投稿はブログ記事でさらに深く解説しているのでプロフィールTOPのURLからご覧になってください！﻿ ﻿ この投稿が学べた！と感じたら「いいね」をお願いします！励みになります👍﻿ ﻿ あとで見返したい場合は「保存」するといいですね！毎日投稿で流れていくので✌️﻿ ﻿ 感想や質問はぜひ「コメント」ください！全部に返信します🤟﻿ ﻿ ﻿ デザイン研究所、通称デザ研では毎日デザインのポイントを解説する投稿をしています！﻿ ﻿ フォローするだけでデザインを学べる！デザインの見る目を学んでいくインスタアカウント！﻿ ﻿ フォローはこちら▶︎ @designkenkyujo</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/designkenkyujo/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> デザイン研究所(デザ研)ほぼ毎日投稿</a>(@designkenkyujo)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-17T10:28:44+00:00">2020年10月月17日午前3時28分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGaLpZtg_HT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGaLpZtg_HT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGaLpZtg_HT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">箱根の思い出 早雲山駅 ケーブルカーとロープウェイの結節点である早雲山駅は、今年7月にリニューアルオープン、cu-mo箱根という愛称で足湯やカフェテリアなどが充実しました。 駅からは箱根外輪山の雄姿や相模湾を望むことができ、ゆったりと時が流れる空間が広がります。 #箱根 #箱根旅行 #箱根っていいよね #箱根ゴールデンコース #強羅 #早雲山 #箱根外輪山 #行ってよかった #hakone #sounzan #gora #landscapephotography</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/syuzugulliver/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> シュンチャン</a>(@syuzugulliver)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-16T15:15:52+00:00">2020年10月月16日午前8時15分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">. . 10/18。 . . . 今日は、フィットフードホーム( @fitfood_home )様の冷凍惣菜「キレイミール」で朝ごはんです！ . . . ＊みそ玉(お湯を注いで味噌汁に) ＊魚介のポワレ香草バターソース ＊もち麦オートミールサラダ ＊チーズと長芋のグラタン ＊小松菜チャンプル ＊甘酒入りスイートポテト . プラス、 ○明太子おにぎり ( @tarako1banhonpo ) ○キウイ . . . 「キレイミール」は、一食でカラダに必要な栄養素が摂取出来る、腸内環境の改善を目指した「腸活サポート食」😳✨ 食べる時は前日に冷蔵庫で解凍してレンジでチンするだけ！ 忙しい時にもとても便利です♡ . 是非チェックしてみて下さい！ 👉 @fitfood_home . . . . . #tabenal #fitfoodhome #朝食 #朝ごはん #昼ごはん #お昼ごはん #ランチ #夜ごはん #晩ごはん #ごはん #夕飯 #和食 #献立 #料理 #てづくりごはん365 #yummy #家庭料理 #おいしい #ごちそうさまでした #おうちごはん #おうちごはんlover #japanesefood #japanese #iegohanphoto #料理好きな人と繋がりたい #豊かな食卓 #器 #一汁三菜 #おにぎり #onigiriaction</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/saorinco0925/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> さぉりん地味ごはん。</a>(@saorinco0925)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-17T23:28:42+00:00">2020年10月月17日午後4時28分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">. . 10/18。 . . . 今日は、フィットフードホーム( @fitfood_home )様の冷凍惣菜「キレイミール」で朝ごはんです！ . . . ＊みそ玉(お湯を注いで味噌汁に) ＊魚介のポワレ香草バターソース ＊もち麦オートミールサラダ ＊チーズと長芋のグラタン ＊小松菜チャンプル ＊甘酒入りスイートポテト . プラス、 ○明太子おにぎり ( @tarako1banhonpo ) ○キウイ . . . 「キレイミール」は、一食でカラダに必要な栄養素が摂取出来る、腸内環境の改善を目指した「腸活サポート食」😳✨ 食べる時は前日に冷蔵庫で解凍してレンジでチンするだけ！ 忙しい時にもとても便利です♡ . 是非チェックしてみて下さい！ 👉 @fitfood_home . . . . . #tabenal #fitfoodhome #朝食 #朝ごはん #昼ごはん #お昼ごはん #ランチ #夜ごはん #晩ごはん #ごはん #夕飯 #和食 #献立 #料理 #てづくりごはん365 #yummy #家庭料理 #おいしい #ごちそうさまでした #おうちごはん #おうちごはんlover #japanesefood #japanese #iegohanphoto #料理好きな人と繋がりたい #豊かな食卓 #器 #一汁三菜 #おにぎり #onigiriaction</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/saorinco0925/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> さぉりん地味ごはん。</a>(@saorinco0925)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-17T23:28:42+00:00">2020年10月月17日午後4時28分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「世界一受けたい授業」でも紹介された僕の必殺ズボラ飯です<br><br>『わさびバター釜玉』<br><br>うどんチンして調味料混ぜるだけ<br><br>バターと卵のコク、めんつゆの旨み、鼻に抜けるワサビの香りがうどんに絡み軽く悶絶します<br><br>温かいうちによーく混ぜて食べてね！<br>レシピはこちら！！！<a href="https://t.co/Y8VXHnZqt4">https://t.co/Y8VXHnZqt4</a> <a href="https://t.co/4z1SMH1r2t">pic.twitter.com/4z1SMH1r2t</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316940370513637376?ref_src=twsrc%5Etfw">October 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">. . 10/18。 . . . 今日は、フィットフードホーム( @fitfood_home )様の冷凍惣菜「キレイミール」で朝ごはんです！ . . . ＊みそ玉(お湯を注いで味噌汁に) ＊魚介のポワレ香草バターソース ＊もち麦オートミールサラダ ＊チーズと長芋のグラタン ＊小松菜チャンプル ＊甘酒入りスイートポテト . プラス、 ○明太子おにぎり ( @tarako1banhonpo ) ○キウイ . . . 「キレイミール」は、一食でカラダに必要な栄養素が摂取出来る、腸内環境の改善を目指した「腸活サポート食」😳✨ 食べる時は前日に冷蔵庫で解凍してレンジでチンするだけ！ 忙しい時にもとても便利です♡ . 是非チェックしてみて下さい！ 👉 @fitfood_home . . . . . #tabenal #fitfoodhome #朝食 #朝ごはん #昼ごはん #お昼ごはん #ランチ #夜ごはん #晩ごはん #ごはん #夕飯 #和食 #献立 #料理 #てづくりごはん365 #yummy #家庭料理 #おいしい #ごちそうさまでした #おうちごはん #おうちごはんlover #japanesefood #japanese #iegohanphoto #料理好きな人と繋がりたい #豊かな食卓 #器 #一汁三菜 #おにぎり #onigiriaction</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/saorinco0925/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> さぉりん地味ごはん。</a>(@saorinco0925)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-17T23:28:42+00:00">2020年10月月17日午後4時28分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は徳島県産のすだちですだちサワー、うまい！！！！！ <a href="https://t.co/YY0neagm2X">pic.twitter.com/YY0neagm2X</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316722812157976577?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は徳島県産のすだちですだちサワー、うまい！！！！！ <a href="https://t.co/YY0neagm2X">pic.twitter.com/YY0neagm2X</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316722812157976577?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は徳島県産のすだちですだちサワー、うまい！！！！！ <a href="https://t.co/YY0neagm2X">pic.twitter.com/YY0neagm2X</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316722812157976577?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/CGdo1_Yg51Z/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">. . 10/18。 . . . 今日は、フィットフードホーム( @fitfood_home )様の冷凍惣菜「キレイミール」で朝ごはんです！ . . . ＊みそ玉(お湯を注いで味噌汁に) ＊魚介のポワレ香草バターソース ＊もち麦オートミールサラダ ＊チーズと長芋のグラタン ＊小松菜チャンプル ＊甘酒入りスイートポテト . プラス、 ○明太子おにぎり ( @tarako1banhonpo ) ○キウイ . . . 「キレイミール」は、一食でカラダに必要な栄養素が摂取出来る、腸内環境の改善を目指した「腸活サポート食」😳✨ 食べる時は前日に冷蔵庫で解凍してレンジでチンするだけ！ 忙しい時にもとても便利です♡ . 是非チェックしてみて下さい！ 👉 @fitfood_home . . . . . #tabenal #fitfoodhome #朝食 #朝ごはん #昼ごはん #お昼ごはん #ランチ #夜ごはん #晩ごはん #ごはん #夕飯 #和食 #献立 #料理 #てづくりごはん365 #yummy #家庭料理 #おいしい #ごちそうさまでした #おうちごはん #おうちごはんlover #japanesefood #japanese #iegohanphoto #料理好きな人と繋がりたい #豊かな食卓 #器 #一汁三菜 #おにぎり #onigiriaction</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/saorinco0925/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> さぉりん地味ごはん。</a>(@saorinco0925)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-10-17T23:28:42+00:00">2020年10月月17日午後4時28分PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は徳島県産のすだちですだちサワー、うまい！！！！！ <a href="https://t.co/YY0neagm2X">pic.twitter.com/YY0neagm2X</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316722812157976577?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は徳島県産のすだちですだちサワー、うまい！！！！！ <a href="https://t.co/YY0neagm2X">pic.twitter.com/YY0neagm2X</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316722812157976577?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">スタミナがついて糖質オフ、しかもレンジで出来る最強の痩せ飯紹介します！<br><br>『レンジでワサビ肉豆腐』<br><br>味つけはめんつゆだけ、容器に材料全部入れて6分チン<br><br>出来たてはもちろん冷まして味をしみさせるとさらにおいしい、仕上げにワサビをたっぷりと！<br><br>レシピはこちら！<a href="https://t.co/sAblnP4ZJj">https://t.co/sAblnP4ZJj</a> <a href="https://t.co/MlYfQFpv2b">pic.twitter.com/MlYfQFpv2b</a></p>&mdash; リュウジ@料理のおにいさんバズレシピ (@ore825) <a href="https://twitter.com/ore825/status/1316575651315367937?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
      ]
    },
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
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
    video: sampleVideo,
  },
];
export default roomDatas;
