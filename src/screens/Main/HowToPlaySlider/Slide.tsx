import React, { CSSProperties, useEffect, useRef, useState } from "react";
import classes from "@Styles/screens/Main/HowToPlaySlider.module.scss";
import { HowToPlaySlideTypes } from "screens/Main/HowToPlaySliderTypes";
import ChangingSubstringsStyles from "@Components/common/ChangingSubstringsStyles";
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
  data: HowToPlaySlideTypes;
}

const Slide: React.FC<Props> = ({ data}) => {
  const slideRef = useRef<HTMLDivElement>();
  const [icon, setIcon] = useState(undefined);

  useEffect(() => {
    getSlideMainImg(data.imgPath, setIcon);
  }, [data.imgPath]);

  const iconStyles: CSSProperties = {
    width: data.num == 1 ? "32px" : data.num == 2 ? "33px" : data.num == 3 ? "40px" : "none",
    height: data.num == 1 ? "31px" : data.num == 2 ? "43px" : data.num == 3 ? "40px" : "none"
  };

  if (!icon) return <Preloader />;
  return (
    <div ref={slideRef} className={classes.MainContentSlide}>
      <div className={classes.MainContentTitle}>
        {data.title}
      </div>

      <div className={classes.MainContentDescription}>
        {!!data.substrings && !!data.substrings.length
          ? <ChangingSubstringsStyles text={data.description} substrings={data.substrings} />
          : <span>{data.description}</span>}
      </div>

      <div className={classes.MainContentStep}>
        <div className={classes.StepText}>
          {data.buttonText}
        </div>
        <div className={classes.StepIconWrap}>
          <img
            src={icon} alt="step"
            style={iconStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;