enum StatusTypeEnum {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',

  bronzeNameExt = 'status_bronze.svg',
  silverNameExt = 'status_silver.svg',
  goldNameExt = 'status_gold.svg',

  bronzeText = 'Бронзовый',
  silverText = 'Серебряный',
  goldText = 'Золотой',

  bronzeColor = '#6f5835',
  silverColor = '#b9bab1',
  goldColor = '#dbea56',
}

enum PrivilegeTypeEnum {
  NOW = 'NOW',
  NEXT = 'NEXT',

  nowIcon = 'privilegeNow.svg',
  nextIcon = 'privilegeNext.svg',

  nowTitle = 'Ваши привилегии',
  nextTitle = 'Следующие привилегии',

  nowDescription = 'Ваши привилегии текущего статуса',
  nextDescription = 'Привилегии следующего статуса',
}

enum PrivilegeTypeListEnum {
  CAR = 'Car',
  DISCOUNT = 'Discount',
  EXP = 'Exp',
  GUN = 'Gun',
  PAINT = 'Paint',

  carIconNameExt = 'car_icon.svg',
  discountIconNameExt = 'discount_icon.svg',
  expIconNameExt = 'exp_icon.svg',
  gunIconNameExt = 'gun_icon.svg',
  paintIconNameExt = 'paint_icon.svg',

  carText = 'Доступ к металлик цветам автомобилей',
  discountText = 'Скидки на все в игре - 10%',
  expText = 'Xp boost',
  gunText = 'Улучшения оружия',
  paintText = 'Доступ к одежде и другой косметике золотого статуса в игре',
}

export { StatusTypeEnum, PrivilegeTypeEnum, PrivilegeTypeListEnum };
