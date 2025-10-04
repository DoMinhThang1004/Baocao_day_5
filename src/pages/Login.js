import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("Nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", form.username);
    navigate("/", { replace: true });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{ width: 360, padding: 30, borderRadius: 12, boxShadow: "0 8px 20px rgba(0,0,0,0.1)", background: "#fff", textAlign: "center" }}>
        <h2 style={{ marginBottom: 20, color: "#333" }}>Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Tên đăng nhập" value={form.username} onChange={handleChange} style={{ padding: 10, width: "100%", marginBottom: 12, borderRadius: 6, border: "1px solid #ccc" }}/>
          <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} style={{ padding: 10, width: "100%", marginBottom: 12, borderRadius: 6, border: "1px solid #ccc" }}/>
          <button type="submit" style={{ padding: 10, width: "100%", borderRadius: 6, border: "none", background: "#007bff", color: "#fff", cursor: "pointer", fontWeight: 500 }}>Đăng nhập</button>
        </form>
        <p style={{ marginTop: 16, fontSize: 14, color: "#555" }}>Chưa có tài khoản? <Link to="/register" style={{ color: "#007bff", textDecoration: "none" }}>Đăng ký ngay</Link></p>
      </div>
    </div>
  );
}
