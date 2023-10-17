import React from "react";
import classes from "@Styles/screens/Main/HowToPlaySlider.module.scss";

const ArrowLeft: React.FC = (props) => {
  // @ts-ignore
  const { onClick } = props;

  return (
    <span
      className={classes.ArrowLeft}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.354 18.708">
              <path
                d="M38,10v1H2.707l7.647,7.646-0.708.708-9-9L1,10,0.646,9.646l9-9,0.708,0.708L1.707,10,2,10.293V10H38Z"
                transform="translate(-0.646 -0.646)"></path>
            </svg>
    </span>
  );
};

export default ArrowLeft;