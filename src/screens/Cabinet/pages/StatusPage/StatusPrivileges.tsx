import React, {  useEffect, useState } from 'react';
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import PrivilegeUnit from './PrivilegeUnit';
import { PrivilegeTypeEnum } from "@Models/screens/Cabinet/enums";
import privilegeDefinition from "@Utils/screens/Cabinet/privilegeDefinition";

interface Props {
  privilegeType: PrivilegeTypeEnum;
  privilegeList: string[];
}

const StatusPrivileges: React.FC<Props> = React.memo(function ({ privilegeType, privilegeList }) {
  const [title, setTitle] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    privilegeType && privilegeDefinition(privilegeType, setTitle, setIcon, setDescription);
  }, [privilegeType]);

  return (
    <div className={classes.StatusPrivileges}>
      <div className={classes.PrivilegeTitleWrap}>
        <div className={classes.PrivilegeIconWrap}>
          <img className={classes.PrivilegeIcon} src={icon} alt="icon" />
        </div>
        <div className={classes.PrivilegeTextWrap}>
          <span className={classes.PrivilegeTitle}>{title}</span>
          <div className={classes.PrivilegeDescription}>{description}</div>
        </div>
      </div>

      <div className={classes.PrivilegeList}>
        {privilegeList && privilegeList.map((unitType, index) => <PrivilegeUnit key={index} unitType={unitType} />)}
      </div>
    </div>
  );
});

export default StatusPrivileges;
