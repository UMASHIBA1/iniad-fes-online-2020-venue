export type AnswerSelection = "a" | "b" | "c" | "d";

interface BaseUserInfo {
  grade: 1 | 2 | 3 |4;
  userAnswer: {
    q1: string;
    q3: string;
  }
}

interface EngineerAndDesignUserInfo {
  course: "engineer" | "design" | null;
  userAnswer: {
    q2: AnswerSelection;
    q4: string;
  }
}

interface CivilUserInfo {
  course: "civil" | null;
  userAnswer: {
    q2: AnswerSelection;
    q4: string;
  }
}

interface BusinessUserInfo {
  course: "business" | null;
  userAnswer: {
    q2: string;
    q4: string;
  }
}


type EscapeGameUserInfo = BaseUserInfo &  (EngineerAndDesignUserInfo | CivilUserInfo | BusinessUserInfo);

export default EscapeGameUserInfo;

export type EscapeGameCourses = EscapeGameUserInfo["course"];
export type EscapeGameGrades = EscapeGameUserInfo["grade"]
