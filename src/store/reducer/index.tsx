import { combineReducers } from "redux";
import ReecoReducer from "./reducer";

export const rootReducer = combineReducers({
    datas: ReecoReducer
})
console.log(ReecoReducer,"ReecoReducer")

export type RootState = ReturnType<typeof rootReducer>;
