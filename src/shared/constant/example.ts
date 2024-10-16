import type { GroupInfoResponse } from "@/api/group/type";
import IcnNew from "@/asset/svg/icn_new.svg?url";
import type { AlarmSettingsDataType, StudyListDataType } from "../type/table";

export const tmpGroupData: GroupInfoResponse = {
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

export const StudyListData: StudyListDataType[] = [
  {
    pin: true,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Favorites",
  },
  {
    pin: true,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Queued",
  },
  {
    pin: true,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Queued",
  },
  {
    pin: true,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Progress",
  },
  {
    pin: false,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Queued",
  },
  {
    pin: false,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: false,
    status: "Queued",
  },
  {
    pin: true,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: false,
    status: "Queued",
  },
  {
    pin: false,
    groupName: "soongsil univ algorithm",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-09-10"),
    role: "스터디장",
    isPublic: true,
    status: "Queued",
  },
];

export const alarmSettingsData: AlarmSettingsDataType[] = [
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
    alarm: true,
    groupName: "숭실대학교 알고리즘 스터디",
    problemRegistration: false,
    solutionRegistration: false,
    commentRegistration: false,
    newMemberAllowed: false,
    endDateImminent: false,
  },
];
