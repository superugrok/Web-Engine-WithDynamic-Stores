import React, { useEffect, useRef } from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import { INotification } from "components/appComponents/header/types";

interface Props {
  index: number;
  notification: INotification;
  notificationsOpened: boolean;
  visiblePopupArea: number;
  setNotificationsList: (prev: any) => void;
}

const Notification: React.FC<Props> =
  ({
     index,
     notification,
     notificationsOpened,
     visiblePopupArea,
     setNotificationsList
   }) => {
    const notificationRef = useRef<HTMLDivElement>();

    useEffect(() => {
      if (
        notificationsOpened
        && !notification.wasRead
        && notificationRef.current.getBoundingClientRect().bottom < visiblePopupArea
      ) {

        const readingDelay = setTimeout(() => {
          setNotificationsList((prev) => {
            return prev.map((el) => {
              if (!el.wasRead && el.id == notification.id) {
                console.log(`Notification_${index} was read...`);
                el.wasRead = true;

                // save to ls
                const lsData = JSON.parse(localStorage.getItem("readNotifications"));
                lsData.push(notification.id);

                localStorage.setItem(
                  "readNotifications",
                  JSON.stringify(
                    lsData
                      .sort((a, b) => b - a)
                      .slice(0, 10)));
              }
              return el;
            });
          });
        }, 3000);
        return () => clearTimeout(readingDelay);
      }
    }, [notificationRef.current, notificationsOpened, visiblePopupArea]);

    return (
      <div
        ref={notificationRef}
        className={classes.Notification}
        style={{ marginTop: index == 0 ? "1%" : "3%" }}
      >
        <a
          className={classes.NotificationLink}
          href={notification.link}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <h3
            className={
              notification.wasRead
                ? classes.NotificationTitle
                : `${classes.NotificationTitle} ${classes.NotificationTitle_WithCircle}`
            }
            style={{ opacity: notification.wasRead ? 0.5 : 1 }}
          >
            {notification.title}
          </h3>
          <span
            className={classes.NotificationText}
            style={{ opacity: notification.wasRead ? 0.5 : 1 }}
          >
                  {notification.text}
                </span>
        </a>
      </div>
    );
  };

export default Notification;