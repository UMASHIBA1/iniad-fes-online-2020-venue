export type AnswerSelection = "1" | "2" | "3" | "4" | null;
export type AnswerText = string | null;

interface BaseUserInfo {
  grade: 1 | 2 | 3 |4;
  userAnswer: {
    q1: AnswerText;
    q3: AnswerText[];
  }
}

interface EngineerUserInfo {
  course: "engineer" | null;
  userAnswer: {
    q2: AnswerSelection;
    q4: AnswerText;
  }
}

interface DesignUserInfo {
    course: "design" | null;
  userAnswer: {
    q2: AnswerSelection[];
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
    q2: AnswerText[];
    q4: AnswerText;
  }
}


type EscapeGameUserInfo = BaseUserInfo &  (EngineerUserInfo | DesignUserInfo | CivilUserInfo | BusinessUserInfo);

export default EscapeGameUserInfo;

export type EscapeGameCourses = EscapeGameUserInfo["course"];
export type EscapeGameGrades = EscapeGameUserInfo["grade"]
