import {
  IcnBronze1,
  IcnBronze2,
  IcnBronze3,
  IcnBronze4,
  IcnBronze5,
  IcnDiamond1,
  IcnDiamond2,
  IcnDiamond3,
  IcnDiamond4,
  IcnDiamond5,
  IcnGold1,
  IcnGold2,
  IcnGold3,
  IcnGold4,
  IcnGold5,
  IcnMaster,
  IcnPlatinum1,
  IcnPlatinum2,
  IcnPlatinum3,
  IcnPlatinum4,
  IcnPlatinum5,
  IcnRuby1,
  IcnRuby2,
  IcnRuby3,
  IcnRuby4,
  IcnRuby5,
  IcnSilver1,
  IcnSilver2,
  IcnSilver3,
  IcnSilver4,
  IcnSilver5,
  IcnUnrank,
} from "@/asset/svg";

export const getTierImage = (tier: number) => {
  switch (tier) {
    case 1:
      return IcnBronze5;
    case 2:
      return IcnBronze4;
    case 3:
      return IcnBronze3;
    case 4:
      return IcnBronze2;
    case 5:
      return IcnBronze1;
    case 6:
      return IcnSilver5;
    case 7:
      return IcnSilver4;
    case 8:
      return IcnSilver3;
    case 9:
      return IcnSilver2;
    case 10:
      return IcnSilver1;
    case 11:
      return IcnGold5;
    case 12:
      return IcnGold4;
    case 13:
      return IcnGold3;
    case 14:
      return IcnGold2;
    case 15:
      return IcnGold1;
    case 16:
      return IcnPlatinum5;
    case 17:
      return IcnPlatinum4;
    case 18:
      return IcnPlatinum3;
    case 19:
      return IcnPlatinum2;
    case 20:
      return IcnPlatinum1;
    case 21:
      return IcnDiamond5;
    case 22:
      return IcnDiamond4;
    case 23:
      return IcnDiamond3;
    case 24:
      return IcnDiamond2;
    case 25:
      return IcnDiamond1;
    case 26:
      return IcnRuby5;
    case 27:
      return IcnRuby4;
    case 28:
      return IcnRuby3;
    case 29:
      return IcnRuby2;
    case 30:
      return IcnRuby1;
    case 31:
      return IcnMaster;
    default:
      return IcnUnrank;
  }
};
