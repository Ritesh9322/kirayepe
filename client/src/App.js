import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to KirayePe</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
