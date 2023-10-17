import React, { useEffect, useState } from "react";
import { IScreenProps } from "@Types/screens";
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import StatusPage from "@Screens/Cabinet/pages/StatusPage/StatusPage";
import { useDispatch, useSelector } from "react-redux";
import { getAppActions, getUserActions } from "@Store/actions/getActions";
import { IStore } from "@Store/types/store";
import LoginPage from "@Screens/Cabinet/pages/StatusPage/LoginPage";
import { sendAuthUserData } from "../../api/screens/Cabinet/auth";
import { IUserStatusData } from "screens/Cabinet/auth";
import Preloader from "@Components/common/Preloader";

const Screen = ({ screen, actions }: IScreenProps) => {
  const dispatch = useDispatch();
  const userStatusActions = getUserActions(dispatch);
  const loading = useSelector((store: IStore) => store.app.loading);
  const isAuth = useSelector((store: IStore) => store.user.isAuth);
  const [isLsKey, setIsLsKey] = useState(true);// true - for preloader at starting

  useEffect(() => {
    if (loading) {
      // to animate opacity on startup
      const actions = getAppActions(dispatch);
      actions.showPreloader(false);
    }
  }, [loading]);

  // if we have userIdentKey at ls, send it to server
  useEffect(() => {
    const userIdentKey = localStorage.getItem("userIdentKey");
    const userLogin = localStorage.getItem("userLogin");
    if (!isAuth && userIdentKey && userLogin) {
      sendAuthUserData({ userIdentKey, userLogin })
        .then(
          (userStatusData: IUserStatusData) => {
            if (userStatusData) {
              userStatusActions.changeAuth(true);
              userStatusActions.changeStatusData(userStatusData);
              !isLsKey && setIsLsKey(true);
            } else {
              localStorage.clear();
              isLsKey && setIsLsKey(false);
            }
          });
    } else {
      isLsKey && setIsLsKey(false);
    }
  }, [isAuth]);

  if (isLsKey && !isAuth) return <Preloader />;
  return (
    <div className={classes.Cabinet}>
      {isAuth
        ? <StatusPage />
        : < LoginPage />
      }
    </div>
  );
};

export default Screen;
