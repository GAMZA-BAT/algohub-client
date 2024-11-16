import type { GroupResponse } from "@/api/groups/type";
import IcnNew from "@/asset/svg/icn_new.svg?url";
import type { AlarmSettingsDataType } from "@/view/user/setting/AlarmSetting/AlarmSettingTable/type";
import type { StudyListType } from "@/view/user/setting/StudyList/StudyListTable/type";

export const tmpGroupData: GroupResponse = {
  id: 0,
  name: "숭실대학교 알고리즘 스터디",
  startDate: "2024.08.13",
  endDate: "2024.09.13",
  introduction:
    "BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘 스터디입니다",
  groupImage: "",
  isOwner: true,
  ownerNickname: "jnary",
};

export const alarms = [
  {
    name: "Yesol Song",
    message: "님이 코멘트를 달았어요.",
    date: "5일 전",
    profileImg: IcnNew,
  },
  {
    name: "Yesol Song",
    message:
      "님이 숭실대학교 알고리즘 스터디에 가입했어요. 코멘트를 달며 인사를 나눠보세요.",
    date: "7일 전",
    profileImg: IcnNew,
  },
  {
    name: "Jimin Lee",
    message:
      "님의 SOPT 알고리즘 스터디에 가입이 승인되었어요. 코멘트를 달며 인사를 나눠보세요.",
    date: "10일 전",
    profileImg: IcnNew,
  },
  {
    name: "Yesol Song",
    message: "님이 코멘트를 달았어요.",
    date: "15일 전",
    profileImg: IcnNew,
  },
  {
    name: "Yesol Song",
    message:
      "님이 숭실대학교 알고리즘 스터디에 가입했어요. 코멘트를 달며 인사를 나눠보세요.",
    date: "17일 전",
    profileImg: IcnNew,
  },
  {
    name: "Jimin Lee",
    message:
      "님의 SOPT 알고리즘 스터디에 가입이 승인되었어요. 코멘트를 달며 인사를 나눠보세요.",
    date: "20일 전",
    profileImg: IcnNew,
  },
];

export const StudyListData: StudyListType[] = [
  {
    isBookmarked: true,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-01-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "bookmarked",
  },
  {
    isBookmarked: true,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-05-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "queued",
  },
  {
    isBookmarked: true,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-03-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "bookmarked",
  },
  {
    isBookmarked: true,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "inProgress",
  },
  {
    isBookmarked: false,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-04-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "queued",
  },
  {
    isBookmarked: false,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-04-05"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "inProgress",
  },
  {
    isBookmarked: true,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-01-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "inProgress",
  },
  {
    isBookmarked: false,
    name: "soongsil univ algorithm",
    startDate: new Date("2024-07-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "queued",
  },
  {
    isBookmarked: false,
    name: "soongsil univ algorithm",
    startDate: new Date("2023-11-10"),
    endDate: new Date("2024-09-10"),
    isOwner: true,
    status: "queued",
  },
];

export const AlarmSettingsData: AlarmSettingsDataType[] = [
  {
    alarm: true,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: true,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: false,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: false,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: false,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: true,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
  {
    alarm: false,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
];
