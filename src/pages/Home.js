import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Lấy dữ liệu sản phẩm giả từ API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const username = localStorage.getItem("username") || "User";

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: 10, fontSize: 28 }}>
        Danh sách sản phẩm
      </h3>
      <p style={{ textAlign: "center", marginBottom: 30, color: "#555" }}>
        Các sản phẩm này được lấy từ API
      </p>

      <div style={{ display: "grid",gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",gap: "25px", }}>
        {products.map((p) => (
          <div key={p.id} style={{border: "1px solid #eee",borderRadius: 12, padding: 20,textAlign: "center",boxShadow: "0 4px 12px rgba(0,0,0,0.1)",transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }} >
            <img src={p.image}alt={p.title}style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: 10 }} />
            <h4 style={{fontSize: 16,margin: "10px 0",height: 50,overflow: "hidden",textOverflow: "ellipsis",}}title={p.title}>{p.title}
            </h4>
            <p style={{ fontWeight: "bold", color: "#e53935", marginBottom: 15 }}>{p.price} $
            </p>
            <button style={{ padding: "8px 16px",background: "#43a047",color: "white",border: "none", borderRadius: 6,cursor: "pointer",transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#388e3c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#43a047")}>
                Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}
