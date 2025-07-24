import { useAuth } from "../AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.name || "User"}!</h1>
      <p>This is your protected dashboard.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
