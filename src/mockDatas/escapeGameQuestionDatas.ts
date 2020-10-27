import q1Img from "../statics/escapeGame/q1.png";
import q2BusiImg from "../statics/escapeGame/q2-busi.png";
import q2EngImg from "../statics/escapeGame/q2-eng.png";
import q2CivilImg from "../statics/escapeGame/q2-civil.png";
import q2DesignImg from "../statics/escapeGame/q2-design.png";
import q3Img from "../statics/escapeGame/q3.png";
import q4EngImg from "../statics/escapeGame/q4-eng.png";
import q4DesignImg from "../statics/escapeGame/q4-design.png";
import q4BusiImg from "../statics/escapeGame/q4-busi.png";
import q4CivilImg from "../statics/escapeGame/q4-civil.png";
import EscapeGameQuestion from "../typings/EscapeGame/EscapeGameQuestion";

export const question1: EscapeGameQuestion = {
  grade: 1,
  course: null,
  title: "INIAD脱出ゲーム学年1 問題",
  mode: "text",
  answer: "INIAD",
  questionImg: q1Img,
};

export const question3: EscapeGameQuestion = {
  grade: 3,
  course: null,
  title: "INIAD脱出ゲーム学年3 問題",
  mode: "threeText",
  answer: [
    [
      "貧困をなくそう",
      "産業と技術革新の基盤をつくろう",
      "パートナーシップで目標を達成しよう",
    ],
    [
      "1.貧困をなくそう",
      "9.産業と技術革新の基盤をつくろう",
      "17.パートナーシップで目標を達成しよう",
    ],
  ],
  questionImg: q3Img,
};

export const engQuestion2: EscapeGameQuestion = {
  grade: 2,
  course: "engineer",
  title: "INIAD脱出ゲーム学年2 問題",
  mode: "selectThree",
  answer: "2",
  questionImg: q2EngImg,
};

export const designQuestion2: EscapeGameQuestion = {
          grade: 2,
        course: "design",
        title: "INIAD脱出ゲーム学年2 問題",
        mode: "multiSelect",
        answer: ["2","4"],
        questionImg: q2DesignImg,
}

export const busiQuestion2: EscapeGameQuestion = {
          grade: 2,
        course: "business",
        title: "INIAD脱出ゲーム学年2 問題",
        mode: "threeText",
        answer: [["Ariticial Intelligent", "Internet of things", "social networking service"]],
        questionImg: q2BusiImg,
}

export const civilQuestion2: EscapeGameQuestion = {
          grade: 2,
        course: "civil",
        title: "INIAD脱出ゲーム学年2 問題",
        mode: "select",
        answer: "2",
        questionImg: q2CivilImg,
}

export const engQuestion4: EscapeGameQuestion = {
          grade: 4,
        course: "engineer",
        title: "INIAD脱出ゲーム学年4 問題",
        mode: "text",
        answer: "HELLO_INIAD!!",
        questionImg: q4EngImg,
}

export const designQuestion4: EscapeGameQuestion = {
          grade: 4,
        course: "design",
        title: "INIAD脱出ゲーム学年4 問題",
        mode: "twoText",
        answer: [["白", "黒"], ["white", "black"]],
        questionImg: q4DesignImg,
}

export const busiQuestion4: EscapeGameQuestion = {
          grade: 4,
        course: "business",
        title: "INIAD脱出ゲーム学年4 問題",
        mode: "threeText",
        answer: [["Deep Blue", "ボンクラーズ", "AlphaGo"], ],
        questionImg: q4BusiImg,
}

export const civilQuestion4: EscapeGameQuestion = {
          grade: 4,
        course: "civil",
        title: "INIAD脱出ゲーム学年4 問題",
        mode: "multiSelect",
        answer: ["1", "2", "4"],
        questionImg: q4CivilImg,
}
