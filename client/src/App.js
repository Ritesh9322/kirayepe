import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <nav style={{ padding: "1rem" }}>
          <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to KirayePe</h2>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
