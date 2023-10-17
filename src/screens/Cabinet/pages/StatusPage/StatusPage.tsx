import React from "react";
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import StatusHeader from "@Screens/Cabinet/pages/StatusPage/StatusHeader";
import StatusProgress from "@Screens/Cabinet/pages/StatusPage/StatusProgress";
import StatusPrivileges from "@Screens/Cabinet/pages/StatusPage/StatusPrivileges";
import { PrivilegeTypeEnum } from "@Models/screens/Cabinet/enums";
import { useSelector } from "react-redux";
import { IStore } from "@Store/types/store";
import Preloader from "@Components/common/Preloader";

const StatusPage: React.FC = () => {
  const statusData = useSelector((store: IStore) => store.user.statusData);

  if(!statusData) return <Preloader />
  return (
    <div className={classes.StatusPage}>

      < StatusHeader
        userLogin={statusData.userLogin}
        userStatusType={statusData.userStatusType}
        numDeposit={statusData.numDeposit}
        numDepositToNextStatus={statusData.numDepositToNextStatus}
      />

      <StatusProgress
        numDeposit={statusData.numDeposit}
        numDepositToNextStatus={statusData.numDepositToNextStatus}
      />

      <div className={classes.StatusAllPrivileges}>
        <StatusPrivileges privilegeType={PrivilegeTypeEnum.NOW} privilegeList={statusData.privilegeNow} />
        <StatusPrivileges privilegeType={PrivilegeTypeEnum.NEXT} privilegeList={statusData.privilegeNext} />
      </div>

    </div>
  );
};

export default StatusPage;