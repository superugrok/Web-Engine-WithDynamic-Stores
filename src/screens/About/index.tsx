import React, { useEffect, useState } from "react";
import { IScreenProps } from "@Types/screens";
import { IStore } from "@Store/types/store";
import Preloader from "@Components/common/Preloader";
import { getAppActions } from "@Store/actions/getActions";
import { useDispatch, useSelector } from "react-redux";

const Screen = ({ screen, actions, getStore }: IScreenProps) => {
  const store = getStore((store: IStore) => store);
  const [testPreloader, setTestPreloader] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((store: IStore) => store.app.loading);

  const [a, setA] = useState(0);

  useEffect(() => {
    setA(1);
    console.log(a);
  });

  useEffect(() => {
    if (loading) {
      // to animate opacity on startup
      const actions = getAppActions(dispatch);
      actions.showPreloader(false);
    }
  }, [loading]);

  React.useEffect(() => {
    console.log("About didUpdate, always happens once at didMount too");
  });

  // test Preloader
  useEffect(() => {
    setTimeout(() => {
      setTestPreloader(true);
    }, 8000);
  }, []);

  //if(!testPreloader) return <Preloader />
  return (
    <div style={{ paddingTop: "30px" }}>
      <button
        onClick={() =>
          actions.changeAnyKey({
            key: "navName",
            value: Math.random().toString(),
          })
        }
      >
        Change redux screen value and console log by useEffect
      </button>
      <p>Current screen: {screen}</p>
      <p>NavName: {store[screen].navName}</p>
    </div>
  );
};

export default Screen;
