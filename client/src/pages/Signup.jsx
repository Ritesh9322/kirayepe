import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );
      localStorage.setItem("token", data.token);   // 🔑 save JWT
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br />
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
