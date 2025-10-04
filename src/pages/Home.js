import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Lấy dữ liệu sản phẩm giả từ API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6") // API sản phẩm
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const username = localStorage.getItem("username") || "User";

  return (
    <div style={{ maxWidth: 900, margin: "30px auto", padding: "20px" }}>
      <h3 style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}> Danh sách sản phẩm</h3>
        <p style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>Các sản phẩm này được lấy từ APi</p>

      <div style={{display: "grid",gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",gap: "20px",}}>
        {products.map((p) => (
          <div key={p.id} style={{border: "1px solid #ddd",borderRadius: 8,padding: 15,textAlign: "center",boxShadow: "0 2px 5px rgba(0,0,0,0.1)",}}>
            <img src={p.image}alt={p.title}style={{width: "100px",height: "100px",objectFit: "contain",}}/>
            <h4 style={{fontSize: 16,margin: "10px 0",height: 50,overflow: "hidden",}}>{p.title}</h4>
            <p style={{ fontWeight: "bold", color: "red" }}>{p.price} $</p>
            <button style={{padding: "6px 12px",background: "green",color: "white",border: "none",borderRadius: 4,cursor: "pointer",}}>Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}
