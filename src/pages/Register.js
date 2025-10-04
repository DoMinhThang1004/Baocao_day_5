import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ fullname:"", email:"", phone:"", username:"", password:"", confirmPassword:"" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) { alert("Mật khẩu xác nhận không khớp!"); return; }
    localStorage.setItem("user", JSON.stringify(form));
    alert("Đăng ký thành công!");
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.1)", background: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>Đăng ký</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input name="fullname" placeholder="Họ và tên" value={form.fullname} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <input name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <input name="username" placeholder="Tên đăng nhập" value={form.username} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu" value={form.confirmPassword} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}/>
        <button type="submit" style={{ padding: 10, borderRadius: 6, border: "none", background: "#6597ec", color: "#fff", cursor: "pointer", fontWeight: 500 }}>Đăng ký</button>
      </form>
      <p style={{ textAlign: "center", marginTop: 16, fontSize: 14, color: "#555" }}>
        Đã có tài khoản? <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>Đăng nhập ngay</Link>
      </p>
    </div>
  );
}
