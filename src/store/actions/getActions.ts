import {
  changeCurrentScreen,
  changeMainSlideOpened,
  changeHowToPlaySlideOpened,
  addShownMainSlide, changeAutoPlayPaused, showPreloader
} from "@Store/actions/appActions";
import { changeAnyKey } from "@Store/actions/screenActions";
import { IAppActions } from "@Store/types/appActions";
import { IScreenActions } from "@Store/types/screenActions";
import { Dispatch } from "react";
import { IUserStatusData } from "screens/Cabinet/auth";
import { changeAuth, changeStatusData } from "@Store/actions/userActions";

type TCombinedActions = IAppActions & IScreenActions;

export const getAppActions = (dispatch: Dispatch<any>): IAppActions => ({
  changeCurrentScreen: (newValue: string) =>
    dispatch(changeCurrentScreen(newValue)),

  changeMainSlideOpened: (newValue: number) =>
    dispatch(changeMainSlideOpened(newValue)),

  changeHowToPlaySlideOpened: (newValue: number) =>
    dispatch(changeHowToPlaySlideOpened(newValue)),

  addShownMainSlide: (newValue: number | number[]) =>
    dispatch(addShownMainSlide(newValue)),

  changeAutoPlayPaused: (value: boolean) =>
    dispatch(changeAutoPlayPaused(value)),

  showPreloader: (value: boolean) =>
    dispatch(showPreloader(value))
});

export const getScreenActions = (
  screen: string,
  dispatch: Dispatch<any>
): IScreenActions => ({
  changeAnyKey: (newValue: { key: string; value: any }) =>
    dispatch(changeAnyKey(screen, newValue))
});

export const getUserActions = (dispatch: Dispatch<any>) => ({
  changeAuth: (isAuth: boolean) =>
    dispatch(changeAuth(isAuth)),

  changeStatusData: (userStatusData: IUserStatusData) =>
    dispatch(changeStatusData(userStatusData))
});

export const getAllActions = (
  screen: string,
  dispatch: Dispatch<any>
): TCombinedActions => ({
  ...getAppActions(dispatch),
  ...getScreenActions(screen, dispatch),
  ...getUserActions(dispatch)
});
