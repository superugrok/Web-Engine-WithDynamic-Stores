interface ISendingAuthUserData {
  userIdentKey: string;
  userLogin: string;
}

interface IUserStatusData {
  userLogin: string;
  userIdentKey: string;
  userStatusType: string;
  numDeposit: number;
  numDepositToNextStatus: number;
  privilegeNow: string[];
  privilegeNext: string[];
};

interface IUserAuthData {
  isAuth: boolean | undefined;
  statusData?: IUserStatusData;
}

export {ISendingAuthUserData, IUserAuthData, IUserStatusData}