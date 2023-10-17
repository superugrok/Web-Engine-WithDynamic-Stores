import { getStore } from "@Store/store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "@Components/common/Preloader";
import { IAppWrapperState } from "@Types/app";
import { App } from "./App";
import { IScreenReducerState } from "@Store/types/store";

export const AppWrapper = () => {
  // Store and initialStates
  // @ts-ignore
  const [appData, setAppData] = React.useState<IAppWrapperState>(null);

  // App did mount - build store.
  React.useEffect(() => {
    // Create store part
    // Get screen's initial state
    const getScreenInitialState = async (
      screen: string
    ): Promise<{ screen: string; initialState: IScreenReducerState }> => {
      let initialState: any = await import(
        `@Screens/${screen}/initialState.ts`
        );
      return { screen, initialState: initialState.default };
    };
    const initialStatesPromiseArray = screensList.map((screen) =>
      getScreenInitialState(screen)
    );

    // Get screens reducers, finally create store and fill aplication init data.
    Promise.all(initialStatesPromiseArray)
      .then((states) => {
        let store = getStore();
        setAppData({ store, initialStates: states });
      })
      .catch((e) => console.error(e));
  }, []);

  return appData?.store ? (
    <Provider store={appData.store}>
      <BrowserRouter>
        <React.Suspense fallback={<Preloader />}>
          <App initialStates={appData.initialStates} />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  ) : (
    <Preloader withoutStore />
  )
}
