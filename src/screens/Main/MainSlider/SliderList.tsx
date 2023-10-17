import React, { useRef } from "react";
import classes from "@Styles/screens/Main/MainSlider.module.scss";
import Slider from "react-slick";
import Slide from "@Screens/Main/MainSlider/Slide";
import slidesData from "@Constants/screens/Main/MainSlider/slidesData";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Store/types/store";
import { getAppActions } from "@Store/actions/getActions";

const SliderList: React.FC = () => {
  const dispatch = useDispatch();
  const actions = getAppActions(dispatch);
  const sliderRef = useRef<Slider>();

  const openedSlideIndex = useSelector((store: IStore) => store.app.mainSlide_opened);
  const autoPlayPaused = useSelector((store: IStore) => store.app.autoPlayPaused);
  const shownSlides = useSelector((store: IStore) => store.app.shownSlides);

  /*
  // addingShownSlide (for single addition) - disabled
  useEffect(() => {
    // timeout for playing css-animations
    const addingShownSlide = setTimeout(() => {
      autoPlayPaused && !shownSlides.includes(openedSlideIndex) && actions.addShownMainSlide(openedSlideIndex);
    }, 2000);
    return () => {
      clearTimeout(addingShownSlide);
    };
  }, [shownSlides, openedSlideIndex, autoPlayPaused]);
  */

  const onClickDotsHandler = () => {
    if (!autoPlayPaused) {
      sliderRef.current.slickPause();
      actions.addShownMainSlide([0, 1, 2]);
      actions.changeAutoPlayPaused(true);
    }
  };

  const sliderSettings = {
    autoplay: !autoPlayPaused,
    autoplaySpeed: 4000,
    pauseOnDotsHover: true,
    swipe: true,
    fade: true,
    draggable: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: openedSlideIndex,
    className: classes.SlickSlider,
    beforeChange: (oldIndex, newIndex) => {
      actions.changeMainSlideOpened(newIndex);
    },
    onSwipe: () => {
      if (!autoPlayPaused) {
        sliderRef.current.slickPause();
        actions.changeAutoPlayPaused(true);
        actions.addShownMainSlide([0, 1, 2]);
      }
    },
    appendDots: (dots) => <ul>
      <div onClick={onClickDotsHandler}>{dots}</div>
    </ul>
  };

  return (
    <Slider ref={sliderRef} {...sliderSettings}>
      {slidesData.map((slide, index) =>
        <Slide key={slide.slideNum} slideIndex={index} slideData={slide} shownSlides={shownSlides} />
      )}
    </Slider>
  );
};

export default SliderList;