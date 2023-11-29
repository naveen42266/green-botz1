
export enum ReecoType {
    DETAILS = "DETAILS"
}

interface SetNewDetails {
    type: ReecoType.DETAILS;
    payload: Array<any>;
}

export type ReecoActionType = SetNewDetails