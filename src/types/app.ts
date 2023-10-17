import { IScreenInitialState } from "screens";

// IHeader
export interface IScreenData {
  initialState: IScreenInitialState;
  screen: string;
}

// common
interface IReducer {
  screen: string;
  initialState: IScreenInitialState;
}

export interface IAppWrapperState {
  store;
  initialStates: IReducer[];
}
