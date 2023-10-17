import React from "react";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import arrow from "@Images/components/appComponents/footer/slider_arrowLeft.png";
import { PartnersArrowsTypes } from "@Models/components/appComponents/footer/enums";

interface Props {
  arrowType: string;
}

const SliderArrow: React.FC<Props> = (props) => {
  // @ts-ignore
  const { className, style, onClick, arrowType } = props;

  return (
    <div>
      <img
        className={`${className} ${
          arrowType == PartnersArrowsTypes.PREV 
          ? classes.ArrowPrev 
          : classes.ArrowNext}`}
        style={style}
        src={arrow} alt="arrow_icon"
        onClick={onClick} />
    </div>
  );
};

export default SliderArrow;