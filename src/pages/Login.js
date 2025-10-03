import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Nhập tên đăng nhập");
      return;
    }
    //login giả lập thôi
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

        //về Home
        navigate("/", { replace: true });
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input style={{ padding: 8, width: "10cm", marginBottom: 12}}
        type="text"  placeholder="Nhập tên bất kỳ" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        
        <button type="submit" style={{ padding: 8, width: "100%" }}> Đăng nhập </button>
      </form>
    </div>
  );
}
