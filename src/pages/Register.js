import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // check lại mk
    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    // lưu vào local
    localStorage.setItem("user", JSON.stringify(form));
    alert("Đăng ký thành công!");
  };

  return (
    <div
      style={{maxWidth: 400, margin: "30px auto",padding: 20,border: "1px solid #ccc", borderRadius: 8}}>
      <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
      <form onSubmit={handleSubmit}style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input name="fullname"placeholder="Họ và tên"value={form.fullname} onChange={handleChange} required/>
        <input type="email"name="email"placeholder="Email"value={form.email} onChange={handleChange} required />
        <input name="phone"placeholder="Số điện thoại" value={form.phone}onChange={handleChange}/>
        <input name="username"placeholder="Tên đăng nhập"value={form.username}onChange={handleChange}required/>
        <input type="password"name="password"placeholder="Mật khẩu" value={form.password}onChange={handleChange} required/>
        <input type="password"name="confirmPassword"placeholder="Xác nhận mật khẩu"value={form.confirmPassword}onChange={handleChange} required/>
        <button type="submit"style={{padding: 8,background: "#6597ec", color: "white", border: "none", borderRadius: 4, cursor: "pointer"}}>Đăng ký</button>
      </form>

      <p style={{ textAlign: "center", marginTop: 16 }}>
        Đã có tài khoản?{" "}
        <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}> Đăng nhập ngay </Link>
      </p>
    </div>
  );
}
