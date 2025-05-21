/** biome-ignore: */
export type CustomEvent = 
{
        
        name: "login_cta_button_click",
        params: {
        
        }
    } | {
        
        name: "github_login_cta_button_click",
        params: {
        
        }
    } | {
        
        name: "landing_login_button_click",
        params: {
        
        }
    }
export const CustomEventRegex = /^(login_cta_button_click|github_login_cta_button_click|landing_login_button_click)$/m