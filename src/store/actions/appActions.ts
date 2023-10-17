import { appReducer } from "@Store/reducers/appReducer";

export const changeCurrentScreen = (newValue: string) =>
  appReducer.actions.CHANGE_CURRENT_SCREEN(newValue);

export const changeMainSlideOpened = (mainSlide_opened: number) =>
  appReducer.actions.CHANGE_MAIN_SLIDE_OPENED(mainSlide_opened);

export const changeHowToPlaySlideOpened = (mainSlide_opened: number) =>
  appReducer.actions.CHANGE_HOWTOPLAY_SLIDE_OPENED(mainSlide_opened);

export const addShownMainSlide = (slide: number | number[]) =>
  appReducer.actions.ADD_SHOWN_MAIN_SLIDES(slide);

export const changeAutoPlayPaused = (value: boolean) =>
  appReducer.actions.CHANGE_MAIN_SLIDER_AUTOPLAY(value);

export const showPreloader = (value: boolean) =>
  appReducer.actions.SHOW_PRELOADER(value);
