import React, { useEffect, useState } from "react";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import typeDefinition from "@Utils/components/appComponents/footer/iconTypeDefition";

interface Props {
  iconType: string;
  link: string;
}

const PartnerIcon: React.FC<Props> =({ iconType, link }) => {
  const [icon, setIcon] = useState(undefined);

  useEffect(()=> {
    typeDefinition(iconType, setIcon);
  }, [iconType])

  return (
    <div className={classes.PartnerIconWrap}>
      <a href={link}
         target="_blank"
      >
        <img
          className={classes.PartnerIcon}
          src={icon}
          alt="icon" />
      </a>
    </div>
  )
};

export default PartnerIcon;