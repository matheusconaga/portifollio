export const ANALYTICS_EVENTS = {
  PAGE_VIEW: "page_view",

  SECTION_VIEW: "section_view",

  PROJECT_VIEW: "project_view",

  GITHUB_CLICK: "github_click",
  GITHUB_PROFILE_CLICK: "github_profile_click",
  DEMO_CLICK: "demo_click",

  CONTACT_CLICK: "contact_click",
  RESUME_DOWNLOAD: "resume_download",

  WHATSAPP_CLICK: "whatsapp_click",
  EMAIL_CLICK: "email_click",
  LINKEDIN_CLICK: "linkedin_click",

} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];