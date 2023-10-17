import React, { useEffect, useState } from 'react';
import classes from "@Styles/screens/Cabinet/Cabinet.module.scss";
import { unitTypeDefinition } from "@Utils/screens/Cabinet/statusDefinitions";

interface Props {
  unitType: string;
}
const PrivilegeUnit: React.FC<Props> = React.memo(function ({ unitType }) {
  const [icon, setIcon]: [string, any] = useState(undefined);
  const [description, setDescription]: [string, any] = useState(undefined);

  useEffect(() => {
    unitType && unitTypeDefinition(unitType, setIcon, setDescription);
  }, [unitType]);

  return (
    <div className={classes.PrivilegeUnit}>
      <img className={classes.UnitIcon} src={icon} alt="icon" />
      <span className={classes.UnitDescription}>{description}</span>
    </div>
  );
});

export default PrivilegeUnit;
