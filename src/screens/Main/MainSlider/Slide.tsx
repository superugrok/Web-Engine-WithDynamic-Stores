import React, { useEffect, useState } from "react";
import classes from "@Styles/screens/Main/MainSlider.module.scss";
import { SlideTypes } from "screens/Main/MainSliderTypes";
import Preloader from "@Components/common/Preloader";

async function getSlideMainImg(path: string, setIcon: (icon: string) => void) {
   try {
     const importedIcon = await import(`@Images/${path}`);
     setIcon(importedIcon.default);
   } catch (e) {
     console.error(e);
   }
}

interface Props {
  slideData: SlideTypes;
  slideIndex: number;
  shownSlides: number[];
}

const Slide: React.FC<Props> = ({ slideData, slideIndex, shownSlides }) => {
  const [titleClass, seTitleClass] = useState(undefined);

  useEffect(() => {
    seTitleClass(!shownSlides.includes(slideIndex)
      ? `${classes.ItemBlockInsTitle} ${classes.ItemBlockInsTitle_Animate}`
      : `${classes.ItemBlockInsTitle} ${classes.ItemBlockInsTitle_WasShown}`);
  },[shownSlides])

  const [icon, setIcon] = useState(undefined);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getSlideMainImg(slideData.mainImgPath, setIcon);
  }, [slideData.mainImgPath]);

  const getSlideImages = (slideImagesNum: number) => {
    const slideImages = [];
    for (let i = 1; i <= slideImagesNum; i++) {
      slideImages.push(
        <div
          key={i}
          className={
            !isHovered
              ?
              classes["ItemImg_" + i]
              :
              `${classes["ItemImg_" + i]} ${classes["ItemImgHovered_" + i]}`
          }
        />
      );
    }

    return slideImages;
  };

  if (!icon) {
    return < Preloader />;
  }
  return (
    <div className={`${classes.SlideItem} ${classes["Slide" + slideData.slideNum]}`}>
      <div className={classes.ItemBlockWrap}>
        <div className={classes.ItemBlock}>

          <div className={classes.ItemBlockIns}>
            <p
              style={
                !shownSlides.includes(slideIndex)
                  /* for playing second type of animation */
                  ? { opacity: 0 }
                  : { opacity: 1, transform: "translate(0, 0)" }
              }
              className={titleClass}
            >
              {slideData.slideTitle}
            </p>
            <p
              style={
              !shownSlides.includes(slideIndex)
                ? { opacity: 0 }
                : { opacity: 1, transform: "translate(0, 0)" }
            }
              className={
                !shownSlides.includes(slideIndex)
                  ? `${classes.ItemBlockInsDescription} ${classes.ItemBlockInsDescription_Animate}`
                  : `${classes.ItemBlockInsDescription} ${classes.ItemBlockInsDescription_WasShown}`
              }
            >
              {slideData.slideDescription}
            </p>
            <div className={classes.ItemBlockTriangles}>
              {
                [1, 2, 3].map(num =>
                  <div
                    key={num}
                    style={
                      !shownSlides.includes(slideIndex)
                        ? { opacity: 0 }
                        : { opacity: 1, transform: "translate(0, 0)" }
                    }
                    className={!shownSlides.includes(slideIndex)
                      ? `${classes.Triangle} ${classes["Triangle" + num + "_Animate"]}`
                      : `${classes.Triangle} ${classes["Triangle" + num + "_WasShown"]}`
                    }
                  />
                )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ItemImage}>
        <img className={classes.SlideMain} src={icon} alt="slideIcon" />
        <div className={classes.SlideItemsWrap}>
          <div
            className={classes.SlideHoverBox}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className={classes.SlideItems}>
            {getSlideImages(slideData.imagesNum)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;