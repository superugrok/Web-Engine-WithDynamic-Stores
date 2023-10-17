import { PrivilegeTypeListEnum, StatusTypeEnum } from "@Models/screens/Cabinet/enums";

function statusDefinition(
  type: string,
  setStatusText: (status: string) => void,
  setStatusIcon: (icon: string) => void,
  setStatusColor: (color: string) => void
) {
  const loadStatusData = async (statusText: string, statusColor: string, imageNameExt: string) => {
    let importedIcon;
    try {
      importedIcon = await import(
        `@Images/screens/Cabinet/status/${imageNameExt}`
        );
      setStatusText(statusText);
      setStatusColor(statusColor);
      setStatusIcon(importedIcon.default);
    } catch (e) {
      console.error(e);
    }
  };
  switch (type) {
    case StatusTypeEnum.BRONZE: {
      return loadStatusData(StatusTypeEnum.bronzeText, StatusTypeEnum.bronzeColor, StatusTypeEnum.bronzeNameExt);
    }
    case StatusTypeEnum.SILVER: {
      return loadStatusData(StatusTypeEnum.silverText, StatusTypeEnum.silverColor, StatusTypeEnum.silverNameExt);
    }
    case StatusTypeEnum.GOLD: {
      return loadStatusData(StatusTypeEnum.goldText, StatusTypeEnum.goldColor, StatusTypeEnum.goldNameExt);
    }
    default: {
      return null
    }
  }
}

function unitTypeDefinition(type: string, setIcon: (title: string) => void, setDescription: (title: string) => void) {
  const loadData = async (imageNameExt: string, description: string) => {
    let importedIcon;
    try {
      importedIcon = await import(
        `@Images/screens/Cabinet/privilege/${imageNameExt}`
        );
      setIcon(importedIcon.default);
      setDescription(description);
    } catch (e) {
      console.error(e);
    }
  };

  switch (type) {
    case PrivilegeTypeListEnum.CAR: {
      loadData(PrivilegeTypeListEnum.carIconNameExt, PrivilegeTypeListEnum.carText);
      break;
    }
    case PrivilegeTypeListEnum.DISCOUNT: {
      loadData(PrivilegeTypeListEnum.discountIconNameExt, PrivilegeTypeListEnum.discountText);
      break;
    }
    case PrivilegeTypeListEnum.EXP: {
      loadData(PrivilegeTypeListEnum.expIconNameExt, PrivilegeTypeListEnum.expText);
      break;
    }
    case PrivilegeTypeListEnum.GUN: {
      loadData(PrivilegeTypeListEnum.gunIconNameExt, PrivilegeTypeListEnum.gunText);
      break;
    }
    case PrivilegeTypeListEnum.PAINT: {
      loadData(PrivilegeTypeListEnum.paintIconNameExt, PrivilegeTypeListEnum.paintText);
      break;
    }

    default: {
      break;
    }
  }
}

export {statusDefinition, unitTypeDefinition}