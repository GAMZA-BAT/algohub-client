export const docs = [
  // Home & Auth Pages
  {
    name: "home_page_view",
    properties: [],
    description: "홈페이지 뷰",
  },
  {
    name: "login_page_view",
    properties: [],
    description: "로그인 페이지 뷰",
  },
  {
    name: "signup_page_view",
    properties: [],
    description: "회원가입 페이지 뷰",
  },
  {
    name: "reset_password_page_view",
    properties: [],
    description: "비밀번호 재설정 페이지 뷰",
  },

  // User Pages
  {
    name: "user_profile_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "사용자 프로필 페이지 뷰",
  },
  {
    name: "user_my_solved_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "내가 푼 문제 페이지 뷰",
  },
  {
    name: "user_create_group_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 생성 페이지 뷰",
  },
  {
    name: "user_edge_case_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "반례 게시판 페이지 뷰",
  },
  {
    name: "user_setting_my_profile_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "사용자 설정 내 프로필 페이지 뷰",
  },
  {
    name: "user_setting_group_list_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "사용자 설정 내 스터디 목록 페이지 뷰",
  },
  {
    name: "user_setting_account_management_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "사용자 설정 내 계정 관리 페이지 뷰",
  },
  {
    name: "user_setting_notification_setting_page_view",
    properties: [
      {
        name: "user_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "사용자 설정 내 알림 설정 페이지 뷰",
  },

  // Group Pages
  {
    name: "group_home_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 홈 페이지 뷰",
  },
  {
    name: "group_my_solved_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 내가 푼 문제 페이지 뷰",
  },
  {
    name: "group_problem_list_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 문제 목록 페이지 뷰",
  },
  {
    name: "group_problem_detail_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
      {
        name: "problem_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 문제 상세 페이지 뷰",
  },
  {
    name: "group_solved_detail_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
      {
        name: "problem_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 풀이 상세 페이지 뷰",
  },
  {
    name: "group_notice_list_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 공지사항 목록 페이지 뷰",
  },
  {
    name: "group_notice_detail_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
      {
        name: "notice_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 공지사항 상세 페이지 뷰",
  },
  {
    name: "group_notice_create_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 공지사항 작성 페이지 뷰",
  },
  {
    name: "group_setting_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 설정 페이지 뷰",
  },
  {
    name: "group_withdraw_page_view",
    properties: [
      {
        name: "group_id",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 탈퇴 페이지 뷰",
  },
  {
    name: "join_group_page_view",
    properties: [
      {
        name: "code",
        type: "string",
        isNullish: false,
      },
    ],
    description: "그룹 가입 페이지 뷰",
  },

  // Legacy Events (keeping for backward compatibility)
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
