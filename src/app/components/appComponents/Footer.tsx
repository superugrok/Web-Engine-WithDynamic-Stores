import React from "react";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";

import { Contacts } from "./footer/Contacts";
import { Partners } from "./footer/Partners";

export const Footer = () => {
  // const store = useSelector((store: IStore) => store);
  console.log("I am footer!");
  return (
    <div className={classes.Footer}>
      <Partners />
      <Contacts />
    </div>
  );
};
