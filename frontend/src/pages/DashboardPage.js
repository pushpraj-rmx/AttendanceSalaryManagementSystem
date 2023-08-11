import Dashboard from "../components/Dashboard";
import AttendanceTracking from "../components/AttendanceTracking"

export default function DashboardPage() {
    return (
      <>
        <h1 className="page-title">Dashboard Page</h1>
        <Dashboard />
        <AttendanceTracking />
      </>
    );
  }
  