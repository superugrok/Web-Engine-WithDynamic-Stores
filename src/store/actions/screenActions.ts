import { getScreenReducer } from "@Store/reducers/screenReducer";


export const changeAnyKey = (
  screen: string,
  newValue: { key: string; value: any }
) =>
  // @ts-ignore
  getScreenReducer(screen, {}).actions.CHANGE_ANY_KEY(newValue);
