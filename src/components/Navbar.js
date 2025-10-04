import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    alert("Đăng xuất thành công!");
    navigate("/login", { replace: true });
  };

  return (
    <nav style={{ padding: "10px 20px", background: "#4b4a4aff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontSize: 20, fontWeight: "bold", color: "#fff", cursor: "pointer", marginLeft: "150px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>T-rex Store</Link>
      </div>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Trang chủ</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Giới thiệu</Link>
        <Link to="/products" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Sản phẩm</Link>
        {!isLoggedIn ? (
          <Link to="/login" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Đăng nhập/Đăng ký</Link>
        ) : (
          <button onClick={handleLogout} style={{ marginLeft: "10px", background: "#f44336", border: "none", padding: "6px 12px", borderRadius: "4px", color: "#fff", cursor: "pointer" }}>Đăng xuất</button>
        )}
      </div>
    </nav>
  );
}
