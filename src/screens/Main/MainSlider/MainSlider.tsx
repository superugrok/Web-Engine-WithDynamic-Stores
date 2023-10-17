import React from "react";
import classes from "@Styles/screens/Main/MainSlider.module.scss";
import SliderList from "@Screens/Main/MainSlider/SliderList";
import SliderBgs from "@Screens/Main/MainSlider/SliderBgs";

const MainSlider: React.FC = () => {
  return (
    <div className={classes.MainSlider}>
      < SliderList />
      < SliderBgs />
    </div>
  );
};

export default MainSlider;