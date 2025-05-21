# ALGOHUB

본 프로젝트는 숭실대학교 컴퓨터학부 2024 소프트웨어공모전 은상 수상작 AlgoHub 의 NextJS 마이그레이션 프로젝트 입니다.

> 2024.09.05 ~

## 🔗 기술 스택

|  **category**   |          **stack**           |
| :-------------: | :--------------------------: |
|    `Common`     |        `biome`, `pnpm`       |
|   `Language`    |  `TypeScript`,`JavaScript`   |
|     `Build`     |            `Vite`            |
|   `Framework`   |           `NextJS`           |
|     `Style`     |        `Vanilla-Extract`     |
| `Data Fetching` |      `ky`, `React-Query`     |
| `Collaboration` | `Notion`, `Figma`, `Discord` |

## 🎯 기능 목록

## 🖋️ 컨벤션

브랜치 전략 : `prefix/#이슈번호/간략-설명`

## 📁 폴더 구조

```
📦 src
 ┣━ 📂api
 ┃   ┣━ 📂board
 ┃   ┃   ┗━ 📜type.ts
 ┃   ┣━ 📂comment
 ┃   ┣━ 📂group
 ┃   ┣━ 📂notification
 ┃   ┣━ 📂problem
 ┃   ┣━ 📂solution
 ┃   ┣━ 📂user
 ┃   ┗━ 📜index.ts
 ┣━ 📂app  <!-- 라우팅에 관한 핵심 정보들만 -->
 ┃   ┣━ 📂group
 ┃   ┃   ┣━ 📂problemList
 ┃   ┃   ┣━ 📂solvedList
 ┃   ┃   ┃   ┗━ 📂solvedDetail
 ┃   ┃   ┣━ 📂mySolved
 ┃   ┃   ┣━ 📂setting  <!-- 멤버 접근 시 404 -->
 ┃   ┃   ┗━ 📜page.tsx  <!-- dashboard -->
 ┃   ┣━ 📂login
 ┃   ┣━ 📂signup
 ┃   ┣━ 📂user
 ┃   ┃   ┣━ 📂createGroup
 ┃   ┃   ┣━ 📂joinGroup
 ┃   ┃   ┣━ 📂setting
 ┃   ┃   ┗━ 📜page.tsx  <!-- dashboard -->
 ┃   ┣━ 🎨globals.css
 ┃   ┣━ 📜layout.tsx
 ┃   ┗━ 📜page.tsx  <!-- onboarding 페이지 -->
 ┣━ 📂asset
 ┃   ┣━ 📂img
 ┃   ┣━ 📂lottie
 ┃   ┗━ 📂svg
 ┣━ 📂common
 ┃   ┣━ 📂component
 ┃   ┃   ┗━ 📂button
 ┃   ┃       ┣━ 📜index.tsx
 ┃   ┃       ┗━ 🎨index.css.ts
 ┃   ┣━ 📂hook
 ┃   ┗━ 📂util
 ┣━ 📂shared  <!-- 도메인이 다를 경우 -->
 ┃   ┣━ 📜constant.ts
 ┃   ┣━ 📂component
 ┃   ┣━ 📂hook
 ┃   ┣━ 📜type.ts
 ┃   ┗━ 📂util
 ┣━ 📂page  <!-- 라우팅 구조 그대로 -->
 ┃   ┣━ 📂group
 ┃   ┃   ┣━ 📂index  <!-- domain/group 에서 필요한 것 -->
 ┃   ┃   ┃   ┣━ 📜constant.ts
 ┃   ┃   ┃   ┣━ 📂component
 ┃   ┃   ┃   ┃   ┗━ 📂ranking
 ┃   ┃   ┃   ┃       ┣━ 📜index.tsx
 ┃   ┃   ┃   ┃       ┣━ 🎨index.css.ts  <!-- index.tsx에 필요한 것 + 공통으로 사용되는 것 -->
 ┃   ┃   ┃   ┃       ┣━ 📜topRanking.tsx
 ┃   ┃   ┃   ┃       ┣━ 🎨topRanking.css.ts
 ┃   ┃   ┃   ┃       ┣━ 📜totalRanking.tsx
 ┃   ┃   ┃   ┃       ┗━ 🎨totalRanking.css.ts
 ┃   ┃   ┃   ┣━ 📂hook
 ┃   ┃   ┃   ┣━ 📜type.ts
 ┃   ┃   ┃   ┗━ 📂util
 ┃   ┃   ┣━ 📂problemList  <!-- domain/group/problemList 에서 필요한 것 -->
 ┃   ┃   ┃   ┣━ 📜constant.ts
 ┃   ┃   ┃   ┣━ 📂component
 ┃   ┃   ┃   ┣━ 📂hook
 ┃   ┃   ┃   ┣━ 📜type.ts
 ┃   ┃   ┃   ┗━ 📂util
 ┃   ┃   ┣━ 📂solvedList
 ┃   ┃   ┃   ┗━ 📂solvedDetail
 ┃   ┃   ┣━ 📂mySolved
 ┃   ┃   ┗━ 📂setting
 ┃   ┣━ 📂login
 ┃   ┣━ 📂signup
 ┃   ┣━ 📂user
 ┃   ┃   ┣━ 📂dashboard
 ┃   ┃   ┣━ 📂createGroup
 ┃   ┃   ┣━ 📂joinGroup
 ┃   ┃   ┗━ 📂setting
 ┃   ┗━ 📂index
 ┣━ 📂service  <!-- 외부 라이브러리 (ex. jotai) -->
 ┗━ 📂style
     ┣━ 🎨globalStyle.css.ts
     ┗━ 🎨theme.css.ts
```
