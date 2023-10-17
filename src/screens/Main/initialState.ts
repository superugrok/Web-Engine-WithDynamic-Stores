import { IScreenInitialState } from "@Types/screens";

const initialState: IScreenInitialState = {
  navName: "Главная",
  navPosition: 1,
};

const extraInitialState = {
  extraParam: "Main",
};

export default { ...initialState, ...extraInitialState };
