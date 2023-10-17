import { INotification } from "../../src/types/components/appComponents/header/types";

const notificationsList: INotification[] = [
  {
    id: 1,
    title: "Неполадки в работе и бонусы",
    text: "Вчера вечером на сервере была организована новая DDOS-атака.",
    link: "https://picsum.photos/190"
  },
  {
    id: 2,
    title: "Промокод с призовыми местами",
    text: "Наша команда усердно потрудилась над нашим меню, теперь вы найдёте ненененене нененене нененене нененене нене..",
    link: "https://picsum.photos/191"
  },
  {
    id: 3,
    title: "Неполадки в работе и бонусы",
    text: "Вчера вечером на сервере была организована новая DDOS-атака.",
    link: "https://picsum.photos/190"
  },
  {
    id: 4,
    title: "Промокод с призовыми местами",
    text: "Наша команда усердно потрудилась над нашим меню, теперь вы найдёте ненененене нененене нененене нененене нене..",
    link: "https://picsum.photos/191"
  },
  {
    id: 5,
    title: "Неполадки в работе и бонусы",
    text: "Вчера вечером на сервере была организована новая DDOS-атака.",
    link: "https://picsum.photos/190"
  },
  {
    id: 6,
    title: "Промокод с призовыми местами",
    text: "Наша команда усердно потрудилась над нашим меню, теперь вы найдёте ненененене нененене нененене нененене нене..",
    link: "https://picsum.photos/191"
  },
  {
    id: 7,
    title: "Неполадки в работе и бонусы",
    text: "Вчера вечером на сервере была организована новая DDOS-атака.",
    link: "https://picsum.photos/190"
  },
  {
    id: 8,
    title: "Промокод с призовыми местами",
    text: "Наша команда усердно потрудилась над нашим меню, теперь вы найдёте ненененене нененене нененене нененене нене..",
    link: "https://picsum.photos/191"
  },
  {
    id: 9,
    title: "Обновлённое меню для игроков",
    text: "Вводите промокод прямо в игре (Клавиша М > ПРОМОКОД)\"UP777\" отыграйте пару часов и получайте lorem lorem lorem lorem lorem lorem.",
    link: "https://picsum.photos/192"
  },
  {
    id: 10,
    title: "Конкурс с призовым фондом",
    text: "Учавствуйте в конкурсе условия в нашей группе Вконтакте.",
    link: "https://picsum.photos/193"
  },
  {
    id: 11,
    title: "Неполадки в работе и бонусы",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi beatae earum, in minima perspiciatis sed sint veritatis? Ducimus est nisi obcaecati porro quo reiciendis vel! Consequuntur ea eligendi repellendus.",
    link: "https://picsum.photos/194"
  },
  {
    id: 12,
    title: "Неполадки в работе и бонусы",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi beatae earum, in minima perspiciatis sed sint veritatis? Ducimus est nisi obcaecati porro quo reiciendis vel! Consequuntur ea eligendi repellendus.",
    link: "https://picsum.photos/195"
  }
];

// from server send only last 10 notifications
const responseInitialNotifications = (): INotification[] => {
  return [...notificationsList].sort((a, b) => b.id - a.id).slice(0, 10);
};

const responseNewNotification = (): INotification[] | null => {
  const newNotification: INotification = {
    id: notificationsList.length + 1,
    title: "Новая новость!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi beatae earum, in minima perspiciatis sed sint veritatis? Ducimus est nisi obcaecati porro quo reiciendis vel! Consequuntur ea eligendi repellendus.",
    link: "https://picsum.photos/195",
    wasRead: false
  };
 /* const newNotification2: INotification = {
    id: notificationsList.length + 2,
    title: "Новая новость!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi beatae earum, in minima perspiciatis sed sint veritatis? Ducimus est nisi obcaecati porro quo reiciendis vel! Consequuntur ea eligendi repellendus.",
    link: "https://picsum.photos/195",
    wasRead: false
  };*/

  // random response
  if (Math.random() < 0.5) {
    notificationsList.push(newNotification);
    /*notificationsList.push(newNotification2);*/
    return [newNotification/*, newNotification2*/];
  } else {
    return null;
  }
};


export { responseInitialNotifications, responseNewNotification };