export interface IAppActions {
  changeCurrentScreen: (newScreen: string) => void;
  changeMainSlideOpened: (mainSlide_opened: number) => void;
  changeHowToPlaySlideOpened: (howToPlaySlide_opened: number) => void;
  addShownMainSlide: (shownSlide: number | number[]) => void;
  changeAutoPlayPaused: (value: boolean) => void;
  showPreloader: (value: boolean) => void;
}
