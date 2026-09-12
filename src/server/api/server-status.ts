const API_URL =
  import.meta.env.VITE_ANALYTICS_API_URL;

export interface ServerStatus {
  device: {
    name: string;
    status: "online" | "offline";
  };

  system: {
    cpu: {
      usage: number;
      cores: number;
    };

    memory: {
      used: number;
      free: number;
      total: number;
      percentage: number;
    };

    disk: {
      used: number;
      free: number;
      total: number;
      percentage: number;
    };

    battery: {
      percentage: number;
      charging: boolean;
      plugged: string;
      status: string;
      health: string;
      temperature: number | null;
    } | null;

    uptime: number;
  };

  services: {
    analytics: ServiceStatus;
    n8n: ServiceStatus;
    neon: ServiceStatus;
    cloudflare: ServiceStatus;
  };

  timestamp: string;
}

export interface ServiceStatus {
  status: "online" | "offline";
  latency: number | null;
}

export async function getServerStatus(): Promise<ServerStatus> {
  const response =
    await fetch(
      `${API_URL}/api/admin/server/status`,
      {
        credentials: "include",
      },
    );

  if (!response.ok) {
    throw new Error(
      `Failed to load server status: ${response.status}`,
    );
  }

  return response.json();
}