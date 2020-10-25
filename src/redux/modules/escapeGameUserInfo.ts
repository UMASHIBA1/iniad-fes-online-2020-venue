import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EscapeGameUserInfo, {
  EscapeGameGrades,
} from "../../typings/EscapeGame/EscapeGameUserInfo";

const localStorageId = "escapeGameUserInfo";

const saveToLocalStorage = (nowState: EscapeGameUserInfo) => {
  localStorage.setItem(localStorageId, JSON.stringify(nowState));
};

const loadFromLocalStorage = () => {
  const loadedState = localStorage.getItem(localStorageId);
  if (loadedState !== null) {
    return JSON.parse(loadedState) as EscapeGameUserInfo;
  } else {
    return null;
  }
};

const loadedState = loadFromLocalStorage();

const initialState =
  loadedState !== null
    ? loadedState
    : {
        grade: 1,
        course: null,
        userAnswer: {
          q1: null,
          q2: null,
          q3: null,
          q4: null,
        },
      };

const escapeGameUserInfo = createSlice({
  name: "escapeGameUserInfo",
  initialState,
  reducers: {
    changeCourse: (
      state,
      action: PayloadAction<EscapeGameUserInfo["course"]>
    ) => {
      const nextState = {
        ...state,
        course: action.payload,
      } as EscapeGameUserInfo;
      saveToLocalStorage(nextState);
      return nextState;
    },
    incrementGrade: (state) => {
      const nextState = {
        ...state,
        grade: (state.grade < 4 ? state.grade + 1 : 4) as EscapeGameGrades,
      };
      saveToLocalStorage(nextState);
      return nextState;
    },
    answerQ1: (
      state,
      action: PayloadAction<EscapeGameUserInfo["userAnswer"]["q1"]>
    ) => {
      if (state.course === null && state.grade === 1) {
        const nextAnswer = {
          ...state.userAnswer,
          q1: action.payload,
        };
        const nextState = {
          ...state,
          userAnswer: nextAnswer,
        } as EscapeGameUserInfo;
        saveToLocalStorage(nextState);
        return nextState;
      }
      return { ...state };
    },
    answerQ2: (
      state,
      action: PayloadAction<EscapeGameUserInfo["userAnswer"]["q2"]>
    ) => {
      if (state.grade === 2) {
        const nextAnswer = {
          ...state.userAnswer,
          q2: action.payload,
        };
        const nextState = {
          ...state,
          userAnswer: nextAnswer,
        } as EscapeGameUserInfo;
        saveToLocalStorage(nextState);
        return nextState;
      }
      return { ...state };
    },
    answerQ3: (
      state,
      action: PayloadAction<EscapeGameUserInfo["userAnswer"]["q3"]>
    ) => {
      if (state.grade === 3) {
        const nextAnswer = {
          ...state.userAnswer,
          q3: action.payload,
        };
        const nextState = {
          ...state,
          userAnswer: nextAnswer,
        } as EscapeGameUserInfo;
        saveToLocalStorage(nextState);
        return nextState;
      }
      return { ...state };
    },
    answerQ4: (
      state,
      action: PayloadAction<EscapeGameUserInfo["userAnswer"]["q4"]>
    ) => {
      if (state.grade === 4) {
        const nextAnswer = {
          ...state.userAnswer,
          q4: action.payload,
        };

        const nextState = {
          ...state,
          userAnswer: nextAnswer,
        } as EscapeGameUserInfo;
        saveToLocalStorage(nextState);
        return nextState;
      }
      return { ...state };
    },
  },
});

export const {
  changeCourse,
  incrementGrade,
  answerQ1,
  answerQ2,
  answerQ3,
  answerQ4,
} = escapeGameUserInfo.actions;

export default escapeGameUserInfo.reducer;
