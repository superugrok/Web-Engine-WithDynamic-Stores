import React, { useState } from "react";
import Slider from "react-slick";
import classes from "@Styles/screens/Main/HowToPlaySlider.module.scss";
import howToPlay_icon from "@Images/screens/Main/HowToPlaySlider/howtoplay.png";
import slidesData from "@Constants/screens/Main/HowToPlaySlider/slidesData";
import Slide from "@Screens/Main/HowToPlaySlider/Slide";
import ArrowLeft from "@Screens/Main/HowToPlaySlider/ArrowLeft";
import ArrowRight from "@Screens/Main/HowToPlaySlider/ArrowRight";
import { getAppActions } from "@Store/actions/getActions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Store/types/store";

const HowToPlaySlider: React.FC = () => {
  const dispatch = useDispatch();
  const actions = getAppActions(dispatch);
  const openedSlideRedux = useSelector((store: IStore) => store.app.howToPlaySlide_opened);

  const [openedSlideIndex, setSlideOpenedIndex] = useState(openedSlideRedux);

  const sliderSettings = {
    fade: true,
    draggable: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: openedSlideIndex,
    className: classes.SliderMainContent,
    prevArrow: <ArrowLeft  />,
    nextArrow: <ArrowRight  />,
    beforeChange: (oldIndex, newIndex) => {
      setSlideOpenedIndex(newIndex);
      actions.changeHowToPlaySlideOpened(newIndex);
    },
  };

  return (
    <div className={classes.HowToPlaySliderWrap}>
      <div className={classes.HowToPlaySlider}>
        <div className={classes.SliderHeader}>
          <img className={classes.HowToPlayIcon} src={howToPlay_icon} alt="howToPlay_icon" />
          <span className={classes.HowToPlayTitle}>Как начать играть ?</span>
        </div>

        <div className={classes.SliderMainWrap}>
          <div className={classes.SliderMain}>

            <div className={classes.BgBoxWrap}>
              <div className={classes.BgBox}>
                <div className={classes.BorderCrossTL} />
                <div className={classes.BorderCrossTR} />
                <div className={classes.BorderCrossBL} />
                <div className={classes.BorderCrossBR} />
              </div>

              <Slider {...sliderSettings}>
                {slidesData.map((data, index) =>
                  <Slide key={index} data={data} />
                )}
              </Slider>

            </div>

          </div>
        </div>

        <div className={classes.SliderNav}>
          <span className={classes.NavStepName}>Шаг {openedSlideIndex + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default HowToPlaySlider;