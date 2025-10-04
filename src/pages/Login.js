import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("Nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }
    // login giả
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", form.username);

    // back lại trang home
    navigate("/", { replace: true });
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input style={{ padding: 8, width: "100%", marginBottom: 12 }}type="text"name="username"placeholder="Tên đăng nhập"value={form.username}onChange={handleChange}/>
        <input style={{ padding: 8, width: "100%", marginBottom: 12 }}type="password"name="password"placeholder="Mật khẩu"value={form.password}onChange={handleChange}/>
        <button type="submit"style={{padding: 8,width: "100%",background: "#007bff",color: "white",border: "none",cursor: "pointer",}}> Đăng nhập</button>
      </form>
      <p style={{ marginTop: 16 }}>
        Chưa có tài khoản?{" "}
        <Link to="/register" style={{ color: "#007bff", textDecoration: "none" }}>Đăng ký ngay</Link>
      </p>
    </div>
  );
}
