import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../styles/App.module.scss";
import { ScreenHOC } from "./ScreenHOC";
import { Footer } from "@Components/appComponents/Footer";
import { Header } from "@Components/appComponents/Header";
import { IScreenData } from "app";
import { IStore } from "@Store/types/store";

interface Props {
  initialStates: IScreenData[];
}

export const App: React.FC<Props> = ({ initialStates }) => {
  // ========== Redux stuff ========== //
  const dispatch = useDispatch();
  const appContentRef = useRef<HTMLDivElement>();
  // const store = useSelector((store: IStore) => store);
  const store = null;
  const loading = useSelector((store: IStore) => store.app.loading);
  // ========== End of redux stuff ========== //

  console.log("I am top component and I'm rerendered...");

  return (
    <div className={classes.App}>
      <div
        ref={appContentRef}
        className={
          !loading
            ? `${classes.AppContent} ${classes.AppContentAnimation_On}`
            : `${classes.AppContent} ${classes.AppContentAnimation_Off}`
        }
      >
        <Header initialStates={initialStates} />
        <ScreenHOC redux={{ dispatch, store }} initialStates={initialStates} />
        <Footer />
      </div>
    </div>
  );
};
