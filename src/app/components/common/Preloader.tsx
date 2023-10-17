import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classes from "@Styles/common/Preloader.module.scss";
import logo from "@Images/common/logo-large.png";
import logo_bg from "@Images/components/appComponents/header/evion_logoBg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAppActions } from "@Store/actions/getActions";
import { IStore } from "@Store/types/store";

interface Props {
  withoutStore?: boolean;
}

const Preloader: React.FC<Props> = ({ withoutStore }) => {
  const dispatch = !withoutStore ? useDispatch() : null;
  const actions = !withoutStore ? getAppActions(dispatch) : null;
  const preloaderRef = useRef<HTMLDivElement>(null);
  const loading = !withoutStore ? useSelector((store: IStore) => store.app.loading) : null;

  useEffect(() => {
    if (!withoutStore && !loading) {
      actions.showPreloader(true);
      return () => actions.showPreloader(false);
    }
  }, []);

  return ReactDOM.createPortal(
    <div className={classes.PreloaderWrap}>
      <div
        ref={preloaderRef}
        className={classes.Preloader}>
        <div className={classes.PreloaderLogoWrap}>
          <a href="/">
            <img className={classes.PreloaderLogo} src={logo} alt="preloader logo" />
            <img className={classes.LogoBg} src={logo_bg} alt="logo_iconBg" />
            <span className={classes.PreloaderTitle}> Загрузка...</span>
          </a>
        </div>
      </div>
    </div>
    , document.querySelector("#root"));
};

export default Preloader;