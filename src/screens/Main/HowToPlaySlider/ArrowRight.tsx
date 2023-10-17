import React from "react";
import classes from "@Styles/screens/Main/HowToPlaySlider.module.scss";


const ArrowRight: React.FC  = (props) => {
  // @ts-ignore
  const { onClick } = props;

  return (
    <span
      className={classes.ArrowRight}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 18.708">
              <path
                d="M78,11H76.707l-8.353,8.354-0.708-.708L75.293,11H0V10H76.293L67.646,1.354l0.708-.708,8.999,9L77,10h1v1Z"
                transform="translate(0 -0.646)"></path>
            </svg>
    </span>
  );
};

export default ArrowRight;