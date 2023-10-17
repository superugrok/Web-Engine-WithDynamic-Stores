import { IUserStatusData } from "screens/Cabinet/auth";

export interface IUserActions {
  changeUserAuthData: (isAuth: boolean) => void;
  changeUserStatusData: (userStatusData: IUserStatusData) => void;
}
