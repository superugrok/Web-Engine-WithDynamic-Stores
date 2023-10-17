import { appReducer } from "@Store/reducers/appReducer";
import {
  createStore,
  combineReducers,
  StoreCreator,
  Reducer,
  AnyAction,
} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { IScreenReducerState } from "./types/store";
import { userReducer } from "@Store/reducers/userReducer";

interface IGetStore extends StoreCreator {
  injectReducer: (
    name: string,
    reducer: Reducer<IScreenReducerState, AnyAction>
  ) => void;
}

let store;

export const getStore = (): IGetStore => {
  if (store) return store;

  const staticReducers = {
    app: appReducer.reducer,
    user: userReducer.reducer,
  };

  const createReducer = (asyncReducers?: any) => {
    return combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
  };

  store = createStore(createReducer(), devToolsEnhancer({}));

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};
