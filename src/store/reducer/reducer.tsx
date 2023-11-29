import { ReecoInitalState, ReecoState } from "../state/state";
import { ReecoActionType, ReecoType } from "../type/type";

export default function ReecoReducer(
    state: ReecoState = ReecoInitalState,
    action: ReecoActionType
  ): ReecoState {
    console.log(action,"action")
    // switch (action.type) {
    //   case ReecoType.DETAILS: {
    //     return {
    //       ...state,
    //       data: action.payload,
    //     };
    //   }
    // }
    switch (action.type) {
        case ReecoType.DETAILS: {
          return {
            ...state,
            data: Array.isArray(action.payload) ? action.payload : state.data,
          };
        }
        default:
          return state; // Return the existing state for other actions
      }
}