const API_URL =
  import.meta.env.VITE_ANALYTICS_API_URL;

export type AnalyticsPeriod =
  | "today"
  | "7d"
  | "30d"
  | "all";

export interface AnalyticsComparison {
  visitors: number;
  sessions: number;
  pageViews: number;
  projectViews: number;

  githubClicks: number;
  demoClicks: number;
  linkedinClicks: number;
  whatsappClicks: number;
  emailClicks: number;

  visitorsPercentage: number | null;
  sessionsPercentage: number | null;
  pageViewsPercentage: number | null;
  projectViewsPercentage: number | null;

  githubClicksPercentage: number | null;
  demoClicksPercentage: number | null;
  linkedinClicksPercentage: number | null;
  whatsappClicksPercentage: number | null;
  emailClicksPercentage: number | null;
}

export interface DeviceAnalyticsItem {
  name: string;
  sessions: number;
  visitors: number;
  percentage: number;
}

export interface DeviceAnalyticsResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;
  totalSessions: number;

  devices: DeviceAnalyticsItem[];
  browsers: DeviceAnalyticsItem[];
}

export interface EngagementDistributionItem {
  key: string;
  label: string;
  sessions: number;
  percentage: number;
}

export interface EngagementAnalyticsResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;

  totalSessions: number;

  averageDurationSeconds: number;
  averageDuration: string;

  longestDurationSeconds: number;
  longestDuration: string;

  engagedSessions: number;
  quickSessions: number;

  engagementRate: number;

  distribution: EngagementDistributionItem[];
}

export interface AnalyticsStats {
  visitors: number;
  sessions: number;
  pageViews: number;
  projectViews: number;
  githubClicks: number;
  demoClicks: number;
  linkedinClicks: number;
  whatsappClicks: number;
  emailClicks: number;

  resumeDownloads: number;

  comparison?: {
    visitorsPercentage: number | null;
    sessionsPercentage: number | null;
    pageViewsPercentage: number | null;
    projectViewsPercentage: number | null;
    githubClicksPercentage: number | null;
    demoClicksPercentage: number | null;
    linkedinClicksPercentage: number | null;
    whatsappClicksPercentage: number | null;
    emailClicksPercentage: number | null;

    resumeDownloadsPercentage: number | null;
  };
}

export interface HourAnalyticsItem {
  hour: number;
  label: string;
  sessions: number;
  visitors: number;
}

export interface PeakHourAnalytics {
  hour: number;
  label: string;
  sessions: number;
  visitors: number;
}

export interface HourAnalyticsResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;

  totalSessions: number;

  peakHour: PeakHourAnalytics | null;

  hours: HourAnalyticsItem[];
}

export interface ProjectAnalytics {
  projectSlug: string;

  githubClicks: number;
  demoClicks: number;
  totalClicks: number;
}

export interface ProjectsAnalyticsResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;

  projects: ProjectAnalytics[];
}

export interface FunnelConversion {
  visitorsToProjects: number;
  projectsToInteraction: number;
  interactionToGithub: number;
  githubToContact: number;
}

export interface AnalyticsFunnel {
  period: AnalyticsPeriod;
  periodStart: string | null;

  visitors: number;

  projectViews: number;
  projectInteractions: number;
  githubClicks: number;
  contactClicks: number;

  conversion: FunnelConversion;
}

export interface VisitorAnalytics {
  period: AnalyticsPeriod;
  periodStart: string | null;

  totalVisitors: number;
  newVisitors: number;
  returningVisitors: number;

  totalSessions: number;
  averageSessionsPerVisitor: number;
}

export interface AnalyticsTimelinePoint {
  date: string;

  visitors: number;
  sessions: number;
  pageViews: number;
  projectViews: number;
}

export interface AnalyticsTimelineResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;

  data: AnalyticsTimelinePoint[];
}

/*
 * Origem do tráfego
 */

export interface TrafficSource {
  source: string;

  sessions: number;
  visitors: number;

  percentage: number;
}

export interface TrafficSourcesResponse {
  period: AnalyticsPeriod;
  periodStart: string | null;

  totalSessions: number;

  sources: TrafficSource[];
}

async function fetchAnalytics<T>(
  endpoint: string,
  period: AnalyticsPeriod,
): Promise<T> {
  const response = await fetch(
    `${API_URL}/api/analytics/${endpoint}?period=${period}`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        "AUTHENTICATION_REQUIRED",
      );
    }

    throw new Error(
      "Failed to fetch analytics data",
    );
  }

  return response.json() as Promise<T>;
}

export async function getStats(
  period: AnalyticsPeriod,
): Promise<AnalyticsStats> {
  return fetchAnalytics<AnalyticsStats>(
    "stats",
    period,
  );
}

export async function getProjects(
  period: AnalyticsPeriod,
): Promise<ProjectsAnalyticsResponse> {
  return fetchAnalytics<ProjectsAnalyticsResponse>(
    "projects",
    period,
  );
}

export async function getFunnel(
  period: AnalyticsPeriod,
): Promise<AnalyticsFunnel> {
  return fetchAnalytics<AnalyticsFunnel>(
    "funnel",
    period,
  );
}

export async function getVisitors(
  period: AnalyticsPeriod,
): Promise<VisitorAnalytics> {
  return fetchAnalytics<VisitorAnalytics>(
    "visitors",
    period,
  );
}

export async function getTimeline(
  period: AnalyticsPeriod,
): Promise<AnalyticsTimelineResponse> {
  return fetchAnalytics<AnalyticsTimelineResponse>(
    "timeline",
    period,
  );
}

export async function getReferrers(
  period: AnalyticsPeriod,
): Promise<TrafficSourcesResponse> {
  return fetchAnalytics<TrafficSourcesResponse>(
    "referrers",
    period,
  );
}

export async function getDevices(
  period: AnalyticsPeriod,
): Promise<DeviceAnalyticsResponse> {
  return fetchAnalytics<DeviceAnalyticsResponse>(
    "devices",
    period,
  );
}

export async function getHours(
  period: AnalyticsPeriod,
): Promise<HourAnalyticsResponse> {
  return fetchAnalytics<HourAnalyticsResponse>(
    "hours",
    period,
  );
}

export async function getEngagement(
  period: AnalyticsPeriod,
): Promise<EngagementAnalyticsResponse> {
  return fetchAnalytics<EngagementAnalyticsResponse>(
    "engagement",
    period,
  );
}