import { IScreenInitialState } from "@Types/screens";

const initialState: IScreenInitialState = {
  navName: "О нас",
  navPosition: 3,
  navHide: false,
};

const extraInitialState = {
  extraParam: "About",
};

export default { ...initialState, ...extraInitialState };
