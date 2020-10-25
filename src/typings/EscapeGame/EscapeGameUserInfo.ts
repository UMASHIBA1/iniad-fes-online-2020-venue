export type AnswerSelection = "a" | "b" | "c" | "d" | null;
export type AnswerText = string | null;

interface BaseUserInfo {
  grade: 1 | 2 | 3 |4;
  userAnswer: {
    q1: AnswerText;
    q3: AnswerText;
  }
}

interface EngineerAndDesignUserInfo {
  course: "engineer" | "design" | null;
  userAnswer: {
    q2: AnswerSelection;
    q4: AnswerText;
  }
}

interface CivilUserInfo {
  course: "civil" | null;
  userAnswer: {
    q2: AnswerSelection;
    q4: AnswerText;
  }
}

interface BusinessUserInfo {
  course: "business" | null;
  userAnswer: {
    q2: AnswerText;
    q4: AnswerText;
  }
}


type EscapeGameUserInfo = BaseUserInfo &  (EngineerAndDesignUserInfo | CivilUserInfo | BusinessUserInfo);

export default EscapeGameUserInfo;

export type EscapeGameCourses = EscapeGameUserInfo["course"];
export type EscapeGameGrades = EscapeGameUserInfo["grade"]
