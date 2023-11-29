import { ReecoActionType, ReecoType } from "../type/type";
import { ActionCreator } from "redux";

export const setDetails: ActionCreator<ReecoActionType> = (each: Array<any>) => {
  return { type: ReecoType.DETAILS, payload: each };
};