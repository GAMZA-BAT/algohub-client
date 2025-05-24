export const docs = [
  {
    name: "dashboard_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "대시보드 페이지 뷰",
  },
  {
    name: "setting_profile_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "설정 프로필 페이지 뷰",
  },
  {
    name: "setting_studylist_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: true,
      },
    ],
    description: "설정 스터디리스트 페이지 뷰",
  },
];
