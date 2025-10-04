import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // kiểm tra đăng nhập khi load trang
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);}, []
);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false); // cập nhật state
    alert("Đăng xuất thành công!");
    navigate("/login", { replace: true });
  };

  return (
    <nav style={{padding: "10px",background: "#4b4a4aff",color: "#fff",display: "flex",alignItems: "center",justifyContent: "flex-end",}}>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Trang chủ</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}> Giới thiệu</Link>
        <Link to="/products" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Sản phẩm</Link>
        {!isLoggedIn ? (
          <Link to="/login" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Đăng nhập/Đăng ký</Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{marginLeft: "10px",background: "#f44336",border: "none",padding: "6px 12px",borderRadius: "4px",color: "#fff",cursor: "pointer",}}>Đăng xuất</button>
        )}
      </div>
    </nav>
  );
}
