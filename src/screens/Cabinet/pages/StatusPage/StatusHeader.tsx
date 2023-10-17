import React, { useEffect, useState } from "react";
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import { statusDefinition } from "@Utils/screens/Cabinet/statusDefinitions";
import userIcon from "@Images/screens/Cabinet/user_icon.png";

interface Props {
  userLogin: string;
  userStatusType: string;
  numDeposit: number;
  numDepositToNextStatus: number;
}

const StatusHeader: React.FC<Props> = ({ userLogin, userStatusType, numDeposit, numDepositToNextStatus }) => {
  const [statusText, setStatusText] = useState(undefined);
  const [statusIcon, setStatusIcon] = useState(undefined);
  const [statusColor, setStatusColor] = useState(undefined);

  useEffect(() => {
    statusDefinition(userStatusType, setStatusText, setStatusIcon, setStatusColor);
  }, [userStatusType]);

  // handlers
  const addingDepositHandler = () => {
    console.log("StatusHeader -- внести средства");
  };

  if(!statusText) return <div />
  return (
    <div className={classes.StatusHeader}>
      <div className={classes.BorderCrossTL} />
      <div className={classes.BorderCrossTR} />

      <div className={classes.StatusIdent}>

        <div className={classes.IdentStatusType}>
          <img src={statusIcon} alt="statusIcon" />
          <span style={{ color: statusColor }}>{statusText} статус</span>
        </div>
        <div className={classes.IdentLogin}>
          <img src={userIcon} alt="userIcon" />
          <span>{userLogin}</span>
        </div>
      </div>

      <div className={classes.StatusDescription}>
        До разблокировки платинового статуса: <span style={{ whiteSpace: "nowrap" }}>
        <span style={{ color: "#fff" }}>{numDeposit}</span>
       / {numDepositToNextStatus}
        </span>
      </div>

      <button
        className={classes.StatusDepositButton}
        onClick={addingDepositHandler}
      >
        <span style={{ position: "relative", top: "1px" }}>Внести средства</span>
      </button>
    </div>
  );
};

export default StatusHeader;