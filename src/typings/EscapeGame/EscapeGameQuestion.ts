import { EscapeGameCourses, EscapeGameGrades, AnswerSelection } from "./EscapeGameUserInfo";

interface EscapeGameQuestion {
  course: EscapeGameCourses;
  grade: EscapeGameGrades;
  title: string;
  questionImg: string;
  mode: "text" | "select";
  answer: AnswerSelection | string;
}

export default EscapeGameQuestion;
