import React, { useEffect } from "react";
import { IScreenProps } from "@Types/screens";
import classes from "@Styles/screens/Main/Main.module.scss";
import MainSlider from "@Screens/Main/MainSlider/MainSlider";
import HowToPlaySlider from "@Screens/Main/HowToPlaySlider/HowToPlaySlider";
import { useDispatch, useSelector } from "react-redux";
import { getAppActions } from "@Store/actions/getActions";
import { IStore } from "@Store/types/store";

const Screen = ({ screen, actions }: IScreenProps) => {
  const dispatch = useDispatch();
  const loading = useSelector((store: IStore) => store.app.loading);

  useEffect(() => {
    if (loading) {
      // to animate opacity on startup
const actions = getAppActions(dispatch);
      actions.showPreloader(false);
    }
  }, [loading]);

  return (
    <div className={classes.MainSection}>
      <MainSlider />
      <HowToPlaySlider />
    </div>
  );
};

export default Screen;
