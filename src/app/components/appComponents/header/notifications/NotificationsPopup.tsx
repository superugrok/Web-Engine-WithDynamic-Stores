import React, { useEffect, useRef, useState } from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import { INotification } from "components/appComponents/header/types";
import Notification from "@Components/appComponents/header/notifications/Notification";

interface Props {
  notificationsList: INotification[];
  notificationsOpened: boolean;
  setNotificationsList: (prev: any) => void;
}

const NotificationsPopup: React.FC<Props> = React.memo(
  ({ notificationsList, notificationsOpened, setNotificationsList }) => {
    const popupRef = useRef<HTMLDivElement>();
    const [visiblePopupArea, setVisiblePopupArea] = useState(undefined);

    useEffect(() => {
      setVisiblePopupArea(popupRef.current.getBoundingClientRect().bottom);
    }, [popupRef.current]);

    const onScrollPopupHandler = () => {
      // for Notification-state reloading
      setVisiblePopupArea(popupRef.current.getBoundingClientRect().bottom + 8 + Math.random());
    };

    return (
      <div className={classes.NotificationsPopupWrap}>
        <div
          ref={popupRef}
          className={classes.NotificationsPopup}
          onScroll={onScrollPopupHandler}
        >

          {notificationsList.map((notification, index) => (
            <Notification
              key={notification.id}
              index={index}
              notification={notification}
              notificationsOpened={notificationsOpened}
              visiblePopupArea={visiblePopupArea}
              setNotificationsList={setNotificationsList}
            />
          ))}

        </div>
      </div>
    );
  }
);

export default NotificationsPopup;
