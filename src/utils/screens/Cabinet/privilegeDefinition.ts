import { PrivilegeTypeEnum } from "@Models/screens/Cabinet/enums";

export default function privilegeDefinition(
  type: PrivilegeTypeEnum,
  setTitle: (title: string) => void,
  setIcon: (icon: string) => void,
  setDescription: (description: string) => void,
) {
  const loadData = async (iconNameExt: string, title: string, description: string) => {
    let importedIcon;
    try {
      importedIcon = await import(
        `@Images/screens/Cabinet/privilege/${iconNameExt}`
        );
      setIcon(importedIcon.default);
      setTitle(title);
      setDescription(description);
    } catch (e) {
      console.error(e);
    }
  };

  switch (type) {
    case PrivilegeTypeEnum.NOW: {
      loadData(PrivilegeTypeEnum.nowIcon, PrivilegeTypeEnum.nowTitle, PrivilegeTypeEnum.nowDescription);
      break;
    }
    case PrivilegeTypeEnum.NEXT: {
      loadData(PrivilegeTypeEnum.nextIcon, PrivilegeTypeEnum.nextTitle, PrivilegeTypeEnum.nextDescription);
      break;
    }

    default: {
      break;
    }
  }
}