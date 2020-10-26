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
  mode: "select" | "selectThree" | "multiSelect";
  answer: AnswerSelection | AnswerSelection[];
}

interface EscapeGameQuestionText {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "text";
  answer: string;
}

interface EscapeGameQuestionThreeText {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "threeText";
  answer: string[];
}

type EscapeGameQuestion = EscapeGameQuestionSelect | EscapeGameQuestionText | EscapeGameQuestionThreeText;

export default EscapeGameQuestion;
