import { IScreenActions } from "@Store/types/screenActions";

export interface IScreenInitialState {
  navName: string;
  navPosition?: number;
  navHide?: boolean;
  screenName?: string;
}

export interface IScreenProps {
  screen: string;
  actions: IScreenActions;
  getStore: (store: any) => any;
}
