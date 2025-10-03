import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Lấy dữ liệu từ API về
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    // Xóa dl login
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    // Quay lại login
    navigate("/login", { replace: true });
  };

  const username = localStorage.getItem("username") || "User";

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", textAlign: "center" }}>
        <h2>Đã đăng nhập với tên đăng nhập {username}</h2>
      <h3>Danh sách Users</h3>
      <ul style={{listStyle: "none", padding: 0}}>
        {users.map((u) => (
          <li key={u.id} style={{margin:0, padding:0}}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
        <div style={{ maxWidth: 600, margin: "50px auto" }}>
            <button onClick={handleLogout} style={{ padding: 8, marginBottom: 10, cursor: "pointer" }}> Đăng xuất </button>
        </div>
    </div>
  );
}
