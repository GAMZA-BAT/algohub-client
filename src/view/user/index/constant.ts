export const GROUP_STATUS_MAPPING = [
  {
    label: "즐겨찾는 스터디",
    status: "bookmarked",
  },
  {
    label: "진행 중 스터디",
    status: "inProgress",
  },
  {
    label: "예정된 스터디",
    status: "queued",
  },
  {
    label: "완료된 스터디",
    status: "done",
  },
];

export const SECTION_TITLE = {
  bookmarked: "즐겨찾는 스터디",
  inProgress: "진행 중 스터디",
  queued: "예정된 스터디",
  done: "완료된 스터디",
} as const;
