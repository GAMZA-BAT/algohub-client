export type PvEvent = 
{
        /** 대시보드 페이지 뷰 */
        name: "dashboard_page_view",
        params: {
        user_id: string
        }
    } | {
        /** 설정 프로필 페이지 뷰 */
        name: "setting_profile_page_view",
        params: {
        user_id: string
        }
    } | {
        /** 설정 스터디리스트 페이지 뷰 */
        name: "setting_studylist_page_view",
        params: {
        user_id?: string | null
        }
    }
export const PvEventRegex = /^(dashboard_page_view|setting_profile_page_view|setting_studylist_page_view)$/m