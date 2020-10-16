import {configureStore} from "@reduxjs/toolkit";
import isFisrtVisitReducer from "./modules/isFirstVisit";
import viewingScreenReducer from "./modules/viewingScreen";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    isFirstVisit: isFisrtVisitReducer,
    viewingScreen: viewingScreenReducer
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type DispatchType = typeof store.dispatch;
