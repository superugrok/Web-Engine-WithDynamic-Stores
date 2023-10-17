import React, { useEffect } from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import NotificationsPopup from "@Components/appComponents/header/notifications/NotificationsPopup";
import { useState } from "react";
import NotificationIcon from "@Components/appComponents/header/notifications/NotificationIcon";
import NotificationNum from "@Components/appComponents/header/notifications/NotificationNum";
import { getInitialNotifications, refreshNews } from "../../../../../api/header/notifications";
import { INotification } from "components/appComponents/header/types";
import Preloader from "@Components/common/Preloader";


const Notifications: React.FC = () => {
  const [notificationsOpened, setNotificationsOpened] = useState(false);

  const [newNotificationsNum, setNewNotificationsNum] = useState(0);
  const [notificationsList, setNotificationsList]: any = useState(undefined);

  //on closing or refresh tab ( can save state to ls only once )
  /*window.onbeforeunload = function() {
    return null;
  };*/

  useEffect(() => {

    // receiving initial notifications
    getInitialNotifications().then((data: INotification[]) => {
      let initialList;

      // if have not key at ls - create new key
      if (!localStorage.getItem("readNotifications")) {
        localStorage.setItem("readNotifications", JSON.stringify([]));
        initialList = data.map((el, index) => {
          el.position = index + 1;
          el.wasRead = false;
          return el;
        });
      }
      // if ls-data exists
      else {
        const lsData = JSON.parse(localStorage.getItem("readNotifications"));
        initialList = data.map((el, index) => {
          el.position = index + 1;
          if (lsData.includes(el.id)) {
            el.wasRead = true;
          } else {
            el.wasRead = false;
          }
          return el;
        });
      }

      setNotificationsList(initialList);
    });

    // receiving new notifications
    const newNotificationsInterval = setInterval(() => {
      refreshNews().then((newNotifications: INotification[] | null) => {

        if (newNotifications) {
          // setting new positions of old-list elements
          const receivedList = [];
          // adding new elements
          newNotifications.forEach((receivedNotification, index) => {
            const newNotification = {
              ...receivedNotification,
              id: receivedNotification.id
            };
            newNotification["position"] = index + 1;
            receivedList.push(newNotification);
          });

          // setting new list
          setNotificationsList((prev) => {

              const newList = prev.map((el) => {
                el.position = el.position + newNotifications.length;
                return el;
              }).concat(receivedList);

              return newList.sort((a, b) => a.position - b.position).slice(0, 10);
            }
          );
        } else {
          console.log("have not new notifications...");
        }
      });
    }, 15000);

    return () => clearInterval(newNotificationsInterval);
  }, []);


// update new notifications num
  useEffect(() => {
    if (notificationsList) {
      let num = 0;
      notificationsList.forEach((notification) => {
        if (!notification.wasRead) num += 1;
      });
      setNewNotificationsNum(num);
    }
  }, [notificationsList]);

// listener to close the popup
  useEffect(() => {
    const closePopupEvent = (ev: any) => {
      let htmlElement = ev?.srcElement;
      const parentsCollection = [htmlElement];

      while (htmlElement?.nodeName !== "BODY") {
        htmlElement = htmlElement.parentElement;
        parentsCollection.push(htmlElement);
      }

      if (!parentsCollection?.find((el) => el.id.includes("Notification"))) {
        setNotificationsOpened(false);
      }
    };

    window.addEventListener("mousedown", (ev) => closePopupEvent(ev));

    // Component will unmount
    return () =>
      window.removeEventListener("click", (ev) => closePopupEvent(ev));
  }, []);


  if (!notificationsList) return <Preloader />;
  return (
    <div className={classes.Notifications}>
      <div id="Notification" className={classes.NotificationIconWrap}>
        <div className={classes.NotificationIconBox}>

          < NotificationIcon setNotificationsOpened={setNotificationsOpened} />

          {!!newNotificationsNum && (
            <NotificationNum newNotificationsNum={newNotificationsNum}
                             setNotificationsOpened={setNotificationsOpened} />
          )}
          {notificationsOpened && (
            <NotificationsPopup
              notificationsOpened={notificationsOpened}
              notificationsList={notificationsList}
              setNotificationsList={setNotificationsList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
