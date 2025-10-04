import useFetch from "../hooks/useFetch";

export default function Products() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Không tải được dữ liệu sản phẩm</p>;

  return (
    <div style={{ maxWidth: 1200, padding: "10px", textAlign: "center", margin: "10px auto" }}>
      <h2>Sản phẩm</h2>
      <p>Các sản phẩm này được lấy từ API</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px" }}>
        {data.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.1)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 6px 12px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 2px 6px rgba(0,0,0,0.1)"; }}>
            <img src={product.image} alt={product.title} width="100" style={{ marginBottom: 8 }}/>
            <h4 style={{ fontSize: 14, height: 40, overflow: "hidden", marginBottom: 5 }}>{product.title}</h4>
            <p style={{ fontWeight: "bold", color: "#e53935" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
