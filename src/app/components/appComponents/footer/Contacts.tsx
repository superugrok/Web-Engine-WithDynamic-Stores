import React from "react";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import SocNetworkIcon from "./SocNetworkIcon";

const copyright = "© 2017-2022 EvionRp.Ru LLC. All rights reserved.";
const contactsList = [
  {
    title: "Telegram",
    link: "https://telegram.com",
  },
  {
    title: "Youtube",
    link: "https://youtube.com",
  },
  {
    title: "Vk",
    link: "https://vk.com",
  },
  {
    title: "Discord",
    link: "https://discordapp.com",
  },
];

export const Contacts = () => {
  const getContacts = () =>
    contactsList.map((contact, index) => (
      <SocNetworkIcon
        key={index + contact.title}
        iconType={contact.title}
        link={contact.link}
      />
    ));

  return (
    <div className={classes.ContactsWrap}>
      <div className={classes.Contacts}>{getContacts()}</div>
      <p className={classes.Copyright}>{copyright}</p>
    </div>
  );
};
