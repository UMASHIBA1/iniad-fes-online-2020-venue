type AnswerSelection = "a" | "b" | "c" | "d";

interface BaseUserInfo {
  grade: 1 | 2 | 3 |4;
  userAnswer: {
    q1: string;
    q3: string;
  }
}

interface EngineerAndDesignUserInfo {
  course: "engineer" | "design";
  userAnswer: {
    q2: AnswerSelection;
    q4: string;
  }
}

interface CivilUserInfo {
  course: "civil";
  userAnswer: {
    q2: AnswerSelection;
    q4: string;
  }
}

interface BusinessUserInfo {
  course: "business";
  userAnswer: {
    q2: string;
    q4: AnswerSelection;
  }
}


type EscapeGameUserInfo = EngineerAndDesignUserInfo | CivilUserInfo | BusinessUserInfo;

export default EscapeGameUserInfo;
