interface ServerDashboardProps {
  onLogout: () => void;
}

export default function ServerDashboard({
  onLogout,
}: ServerDashboardProps) {
  return (
    <main>
      <h1>Mini Server</h1>

      <p>Galaxy S21 FE</p>

      <button
        type="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </main>
  );
}