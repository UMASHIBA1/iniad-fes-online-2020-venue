import EscapeGameQuestion from "../../typings/EscapeGame/EscapeGameQuestion";
import EscapeGameUserInfo from "../../typings/EscapeGame/EscapeGameUserInfo";

const isCorrectUserAnswer = (
  question: EscapeGameQuestion,
  userAnswer: EscapeGameUserInfo["userAnswer"]["q2" | "q1" | "q3" | "q4"]
) => {
  if (question.mode === "select" || question.mode === "selectThree") {
    if (typeof userAnswer === "string") {
      return userAnswer === question.answer;
    }
    return false;
  } else if (question.mode === "multiSelect") {
    if (Array.isArray(userAnswer)) {
      let result = true;
      question.answer.forEach((oneAnswer) => {
        if (!userAnswer.includes(oneAnswer)) {
          result = false;
        }
      });
      return result;
    }
    return false;
  } else if (question.mode === "threeText" || question.mode === "twoText") {
    if (Array.isArray(userAnswer)) {
      let theUsersAnswerIsCorrect = true;
      for (let i = 0; i < userAnswer.length; i++) {
        let theQuestionIsCorrect = false;
        const answerList = question.answer[i];
        const theIndexUserAnswer = userAnswer[i];
        if (theIndexUserAnswer !== null) {
          for (const oneAnswer of answerList) {
            if (
              theIndexUserAnswer.trim().toLowerCase() ===
              oneAnswer.trim().toLowerCase()
            ) {
              theQuestionIsCorrect = true;
            }
          }
        }
        if (!theQuestionIsCorrect) {
          theUsersAnswerIsCorrect = false;
        }
      }
      return theUsersAnswerIsCorrect;
    } else {
      return false;
    }
  } else if (question.mode === "text") {
    if (typeof userAnswer === "string") {
      let isCorrectThisAnswer = false;
      question.answer.forEach((oneAnswer) => {
        if (
          userAnswer.trim().toLowerCase() === oneAnswer.trim().toLowerCase()
        ) {
          isCorrectThisAnswer = true;
        }
      });
      return isCorrectThisAnswer;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default isCorrectUserAnswer;
