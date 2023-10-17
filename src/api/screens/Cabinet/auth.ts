import { responseAuthUserData } from "../../../../public/serverData/auth";
import { ISendingAuthUserData } from "screens/Cabinet/auth";

const sendAuthUserData = (userAuthData: ISendingAuthUserData) => new Promise((resolve) => {
  setTimeout(() =>
    resolve(responseAuthUserData(userAuthData)
    ), 1000);
});

export { sendAuthUserData };