import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import notification_icon from "@Images/components/appComponents/header/notification_icon.svg";

interface Props {
  setNotificationsOpened: any;
}

const NotificationIcon: React.FC<Props> = React.memo(({ setNotificationsOpened }) => {
  return (
    <>
    <img
      className={classes.NotificationIcon}
      src={notification_icon}
      alt="notification_icon"
      onClick={() => setNotificationsOpened(prev => !prev)}
    />
    </>
  );
});

export default NotificationIcon;