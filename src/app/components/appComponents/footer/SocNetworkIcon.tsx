import React, { useEffect, useState } from "react";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import typeDefinition from "@Utils/components/appComponents/footer/iconTypeDefition";

interface Props {
  iconType: string;
  link: string;
}

const SocNetworkIcon: React.FC<Props> = ({ iconType, link }) => {
  const [icon, setIcon] = useState(undefined);
  const [className, setClassName] = useState(undefined);

  useEffect(()=> {
    typeDefinition(iconType, setIcon, setClassName);
  }, [iconType])

  return (
    <div className={classes.SocNetworkIconWrap}>
      <a href={link}
         target="_blank"
      >
      <img
        className={`${classes.SocNetworkIcon} ${className}`}
        src={icon}
        alt="icon" />
      </a>
    </div>
  );
};

export default SocNetworkIcon;