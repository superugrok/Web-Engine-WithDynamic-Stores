import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import { TopMenu } from "./header/TopMenu";
import { IScreenData } from "app";
import { HeaderLogo } from "@Components/appComponents/header/HeaderLogo";

interface Props {
  initialStates: IScreenData[];
}

export const Header: React.FC<Props> = React.memo(({ initialStates }) => {
  return (
    <div className={classes.Header}>
      <HeaderLogo />
      <TopMenu initialStates={initialStates} />
    </div>
  );
});
