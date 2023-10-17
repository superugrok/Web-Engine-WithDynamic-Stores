import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAppActions } from "@Store/actions/getActions";

interface Props {
  screen: string;
  navName: any;
  disabled: boolean;
}

const TopMenuLink: React.FC<Props> = ({ screen, navName, disabled }) => {
  const dispatch = useDispatch();
  const actions = getAppActions(dispatch);

  const [linkIsHovered, setLinkIsHovered] = useState(false);

  const onClickHandler = () => {
    actions.showPreloader(true);
  }

  return !disabled ? (
    <div
      className={
        !linkIsHovered
          ? classes.TopMenuLink
          : `${classes.TopMenuLink} ${classes.TopMenuLinkHovered}`
      }
    >
      <Link
        onClick={onClickHandler}
        onMouseEnter={() => setLinkIsHovered(true)}
        onMouseLeave={() => setLinkIsHovered(false)}
        to={`/${screen}`}
      >
        {navName}
      </Link>
    </div>
  ) : null;
};

export default TopMenuLink;
