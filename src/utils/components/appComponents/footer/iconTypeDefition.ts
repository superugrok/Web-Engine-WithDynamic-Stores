import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import { FooterContactsTypes, FooterPartnersTypes } from "@Models/components/appComponents/footer/enums";

export default function typeDefinition(type: string, setIcon: (icon: string) => void, setClassName?: (className: string) => void) {
  const loadData = async (iconNameExt: string, className: string) => {
    let importedIcon;
    try {
      importedIcon = await import(
        `@Images/components/appComponents/footer/${iconNameExt}`
        );
      setIcon(importedIcon.default);
      className && !!setClassName && setClassName(className);
    } catch (e) {
      console.error(e);
    }
  };

  switch (type) {
    // Logo definitions
    case FooterContactsTypes.TG: {
      return loadData(FooterContactsTypes.tg_iconNameExt, classes.TgIcon)
    }
    case FooterContactsTypes.YT: {
      return loadData(FooterContactsTypes.yt_iconNameExt, classes.YtIcon)
    }
    case FooterContactsTypes.VK: {
      return loadData(FooterContactsTypes.vk_iconNameExt, classes.VkIcon)
    }
    case FooterContactsTypes.DC: {
      return loadData(FooterContactsTypes.dc_iconNameExt, classes.DcIcon)
    }

      // Partner definitions
    case FooterPartnersTypes.OVH: {
      return loadData(FooterPartnersTypes.ovh_iconNameExt, null)
    }
    case FooterPartnersTypes.WM: {
      return loadData(FooterPartnersTypes.wm_iconNameExt, null)
    }
    case FooterPartnersTypes.UP: {
      return loadData(FooterPartnersTypes.up_iconNameExt, null)
    }

    default: {
      return null;
    }
  }
}