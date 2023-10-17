import { DeepPartial } from "redux";
import { IScreenInitialState } from "screens";

export interface IAppReducerState {
  currentScreen: string;
  mainSlide_opened: number;
  howToPlaySlide_opened: number;
  shownSlides: number[];
  autoPlayPaused: boolean;
  loading: boolean;
}

export interface IScreenReducerState extends IScreenInitialState {
  [key: string]: any;
}

export interface IStore {
  [key: string]: DeepPartial<IScreenReducerState>;

  app: IAppReducerState;
}
