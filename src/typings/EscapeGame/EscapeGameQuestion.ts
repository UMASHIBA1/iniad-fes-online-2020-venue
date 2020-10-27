import {
  EscapeGameCourses,
  EscapeGameGrades,
  AnswerSelection,
} from "./EscapeGameUserInfo";

interface EscapeGameQuestionSelect {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "selectThree" | "select";
  answer: AnswerSelection;
}

interface EscapeGameMultiSelect {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "multiSelect";
  answer: AnswerSelection[];
}

interface EscapeGameQuestionText {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "text";
  answer: string[];
}

interface EscapeGameQuestionThreeText {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "threeText" | "twoText";
  answer: string[][];
}

type EscapeGameQuestion =
  | EscapeGameQuestionSelect
  | EscapeGameMultiSelect
  | EscapeGameQuestionText
  | EscapeGameQuestionThreeText;

export default EscapeGameQuestion;
