import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppReducerState } from "@Store/types/store";

const initialState: IAppReducerState = {
  currentScreen: "Main",
  mainSlide_opened: 0,
  howToPlaySlide_opened: 0,
  shownSlides: [],
  autoPlayPaused: false,
  loading: false,
};

export const appReducer = createSlice({
  name: "APP",
  initialState,
  reducers: {
    CHANGE_CURRENT_SCREEN(state, action: PayloadAction<string>) {
      state.currentScreen = action.payload;
    },

    CHANGE_MAIN_SLIDE_OPENED(state, action: PayloadAction<number>) {
      state.mainSlide_opened = action.payload;
    },

    CHANGE_HOWTOPLAY_SLIDE_OPENED(state, action: PayloadAction<number>) {
      state.howToPlaySlide_opened = action.payload;
    },

    ADD_SHOWN_MAIN_SLIDES(state, action: PayloadAction<number | number[]>) {
      if (typeof action.payload === "object") {
        state.shownSlides = state.shownSlides.concat(action.payload);
      } else if (typeof action.payload === "number") {
        state.shownSlides.push(action.payload);
      }
    },

    CHANGE_MAIN_SLIDER_AUTOPLAY(state, action: PayloadAction<boolean>) {
      state.autoPlayPaused = action.payload;
    },

    SHOW_PRELOADER(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    }
  }
});
