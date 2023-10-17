import React from "react";
import classes from "@Styles/components/appComponents/header/Header.module.scss";
import { IScreenData } from "app";
import TopMenuLink from "@Components/appComponents/header/TopMenuLink";
import Notifications from "@Components/appComponents/header/notifications/Notifications";
import { useRef } from "react";

interface Props {
  initialStates: IScreenData[];
}

export const TopMenu: React.FC<Props> = ({ initialStates }) => {
  // Build dynamic menu based at src/screens/ directory. Must be memoized because that menu is always static.
  const blockRef = useRef<HTMLDivElement>(null);

  const nav = React.useMemo(() => {
    let iniStates = {};
    initialStates.forEach((state) => {
      iniStates = { ...iniStates, [state.screen]: state.initialState };
    });

    return screensList.sort(
      (a, b) => iniStates[a].navPosition - iniStates[b].navPosition)
      .map((screen) => (
        <TopMenuLink
          key={screen}
          screen={screen}
          navName={iniStates[screen].navName}
          disabled={iniStates[screen].navHide}
        />
      ));
  }, []);

  return (
    <div ref={blockRef} className={classes.TopMenu}>
      {nav}
      <Notifications />
    </div>
  );
};
