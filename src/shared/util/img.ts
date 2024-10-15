import type { TierDetail } from "@/shared/type";

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
} from "@/asset/svg";

export const getTierImage = (tier: TierDetail) => {
  switch (tier) {
    case "bronze 1":
      return IcnBronze1;
    case "bronze 2":
      return IcnBronze2;
    case "bronze 3":
      return IcnBronze3;
    case "bronze 4":
      return IcnBronze4;
    case "bronze 5":
      return IcnBronze5;
    case "silver 1":
      return IcnSilver1;
    case "silver 2":
      return IcnSilver2;
    case "silver 3":
      return IcnSilver3;
    case "silver 4":
      return IcnSilver4;
    case "silver 5":
      return IcnSilver5;
    case "gold 1":
      return IcnGold1;
    case "gold 2":
      return IcnGold2;
    case "gold 3":
      return IcnGold3;
    case "gold 4":
      return IcnGold4;
    case "gold 5":
      return IcnGold5;
    case "platinum 1":
      return IcnPlatinum1;
    case "platinum 2":
      return IcnPlatinum2;
    case "platinum 3":
      return IcnPlatinum3;
    case "platinum 4":
      return IcnPlatinum4;
    case "platinum 5":
      return IcnPlatinum5;
    case "diamond 1":
      return IcnDiamond1;
    case "diamond 2":
      return IcnDiamond2;
    case "diamond 3":
      return IcnDiamond3;
    case "diamond 4":
      return IcnDiamond4;
    case "diamond 5":
      return IcnDiamond5;
    case "ruby 1":
      return IcnRuby1;
    case "ruby 2":
      return IcnRuby2;
    case "ruby 3":
      return IcnRuby3;
    case "ruby 4":
      return IcnRuby4;
    case "ruby 5":
      return IcnRuby5;
    case "master":
      return IcnMaster;
  }
};
