import { IScreenInitialState } from "@Types/screens";

const initialState: IScreenInitialState = {
  navName: "Кабинет",
  navPosition: 2,
};

const extraInitialState = {
  extraParam: "Cabinet",
};

export default { ...initialState, ...extraInitialState };
