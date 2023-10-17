import { ISendingAuthUserData, IUserStatusData } from "screens/Cabinet/auth";

export const responseAuthUserData = (userAuthData: ISendingAuthUserData) => {

  console.log('server: got userAuthData = ', userAuthData);

  const statusData: IUserStatusData = {
    userIdentKey: "random-1234",
    userLogin: "Ed BOON",
    userStatusType: "Gold",
    numDeposit: 2000,
    numDepositToNextStatus: 5000,
    privilegeNow: ["Gun", "Exp", "Paint"],
    privilegeNext: ["Discount", "Car", "Paint"]
  };

  if (!userAuthData.userIdentKey) {
    // check if login & password are correct at server
    return statusData;
  } else if (userAuthData.userIdentKey) {
    // check if userIdentKey is correct at server
    if (statusData.userIdentKey === userAuthData.userIdentKey) {
      return statusData;
    } else {
      return null;
    }
  }
};