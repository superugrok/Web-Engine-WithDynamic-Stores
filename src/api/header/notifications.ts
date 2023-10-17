import { responseInitialNotifications, responseNewNotification } from "../../../public/serverData/notfications";

const getInitialNotifications = () => new Promise(resolve => {
  setTimeout(() => resolve(responseInitialNotifications()), 500);
});

const refreshNews = () => new Promise(resolve => {
  setTimeout(() => resolve(responseNewNotification()), 2000);
});

export { getInitialNotifications, refreshNews };