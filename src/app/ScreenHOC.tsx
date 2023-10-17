import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getScreenActions } from "@Store/actions/getActions";
import { PageNotFound } from "@Components/common/PageNotFound";
import { useSelector } from "react-redux";
import { IScreenData } from "app";
import { getScreenReducer } from "@Store/reducers/screenReducer";
import { getStore } from "@Store/store";
import { Dispatch } from "@reduxjs/toolkit";
import { IStore } from "@Store/types/store";

interface IProps {
  redux: {
    dispatch: Dispatch<any>;
    store: IStore;
  };
  initialStates: IScreenData[];
}

export const ScreenHOC: React.FC<IProps> = ({ redux, initialStates }) => {
  const store = useSelector((store) => store);
  // ########## Creating routes part ########## //
  const dispatch = redux.dispatch;

  const buildRoutes = () => {
    // Create routes with React.lazy and React.Suspence features.
    const buildRoute = (screen: string) => {
      const Element = React.lazy(() => import(`@Screens/${screen}/`));
      return (
        <Route
          key={screen}
          path={`/${screen}`}
          element={
            <Element
              getStore={useSelector}
              screen={screen}
              actions={getScreenActions(screen, dispatch)}
            />
          }
        />
      );
    };

    // Screens list - a webpack var, contains all screens listed at src/screens/
    const routesList = screensList.map((screen) => buildRoute(screen));
    // Add MainPage into routes array twice because that we wants to see Main Page at "/" and "/Main" pathname state.
    const MainPageElement: any = React.lazy(() => import(`@Screens/Main/`));

    // Extra routes that not listed at src/screens/ directory (or by more any reason), like 404 page.
    const extraRoutes = [
      <Route key={"404"} path="*" element={<PageNotFound />} />,
      <Route
        key="MainPage"
        path="/"
        element={
          <MainPageElement
            getStore={useSelector}
            screen="Main"
            actions={getScreenActions("Main", dispatch)}
          />
        }
      />,
    ];

    // Combine generic routes with static routes.
    const routes = [...routesList, ...extraRoutes];
    return routes;
  };

  // Memoizated routes, because that them are always static.
  const routes = React.useMemo(() => buildRoutes(), []);

  // Hook that returns actual application path.
  const history = useNavigate();

  // Check if screen's redux store exists, if no create one.
  React.useEffect(() => {
    const newScreen = window.location.pathname.replace("/", "") || "Main";
    if (!store[newScreen]) {
      let initialState = initialStates.find(
        (state) => state.screen == newScreen
      ).initialState;
      let reducer = getScreenReducer(newScreen, initialState).reducer;
      getStore().injectReducer(newScreen, reducer);
    }
  }, [history]);

  return (
    <div style={{ zIndex: 3 }}>
      <Routes>{routes}</Routes>
    </div>
  );
};
