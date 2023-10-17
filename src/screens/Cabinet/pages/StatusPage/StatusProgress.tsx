import React, { useEffect, useState } from "react";
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import starEmpty_icon from "@Images/screens/Cabinet/starEmpty_icon.png"
import starFilled_icon from "@Images/screens/Cabinet/starFilled_icon.png"

interface Props {
  numDeposit: number;
  numDepositToNextStatus: number;
}

const StatusProgress: React.FC<Props> = ({ numDeposit, numDepositToNextStatus}) => {
  const [lineProgress, setLineProgress]: [number, any] = useState(0);

  useEffect(() => {
    setLineProgress( numDeposit / (numDepositToNextStatus /100 ));
  }, [numDeposit, numDepositToNextStatus]);

  //styles
  const lineProgressStyles = {
    width: `${lineProgress}%`,
  };

  const progressRollerStyles = {
    left: `calc(${lineProgress}% - ${window.innerWidth < 350 ? '19px' : '31px'})`,
  };

  return (
    <div className={classes.StatusProgress}>
      <div className={classes.ProgressLineContainer}>
        <div className={classes.BorderCrossBL}/>
        <div className={classes.BorderCrossBR}/>

      <div className={classes.ProgressLine} style={lineProgressStyles} />

        <div style={progressRollerStyles} className={classes.ProgressRollerWrap}>
          <div className={classes.ProgressRoller}>{numDeposit}р</div>
        </div>
      </div>
      <div className={classes.ProgressScaleWrap}>
        <div className={classes.ProgressScale}/>
        <div className={classes.ProgressScaleValues}>
          <div className={classes.ScaleStartValue}>
            <img src={starEmpty_icon} alt="starEmpty" />
            <span>0P</span>
          </div>
          <div className={classes.ScaleEndValue}>
            <img src={starFilled_icon} alt="starFilled" />
            <span>{numDepositToNextStatus}P</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusProgress;