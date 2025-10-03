import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export default function UserDetail() {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Chi tiết người dùng</h2>
        <ul>
            <p><b>Tên:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Số Điện Thoại:</b> {user.phone}</p>
        </ul>

      <button onClick={() => navigate("/")} 
      style={{ marginTop: 20, padding: "8px 16px" }}> Quay lại </button>
    </div>
  );
}
