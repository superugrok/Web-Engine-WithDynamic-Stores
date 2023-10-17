import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";

interface Props {
  newNotificationsNum: number;
  setNotificationsOpened: any;
}

const NotificationNum: React.FC<Props> = React.memo(({ newNotificationsNum, setNotificationsOpened }) => {
  return (
    <div
      className={classes.NotificationsCircleWrap}
      onClick={() => setNotificationsOpened(prev => !prev)}
    >
      <div className={classes.NotificationsCircle}>
        <span>{newNotificationsNum}</span>
      </div>
    </div>
  );
});

export default NotificationNum;