import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import logo_icon from "@Images/components/appComponents/header/evion_roleplay_logo.png";
import logo_bg from "@Images/components/appComponents/header/evion_logoBg.png";
import { Link } from "react-router-dom";

export const HeaderLogo: React.FC = () => {
  return (

    <div className={classes.HeaderLogo}>
      <div className={classes.LogoIconWrap}>
        <div className={classes.LogoBgWrap}>
          <img className={classes.LogoBg} src={logo_bg} alt="logo_iconBg" />
        </div>
        <Link to="/" style={{zIndex: 5}}>
          <img className={classes.LogoIcon} src={logo_icon} alt="logo_icon" />
        </Link>
      </div>
    </div>
  );
};
