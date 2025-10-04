import useFetch from "../hooks/useFetch";

export default function Products() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Không tài được dữ liệu sản phẩm tĩnh</p>;

  return (
    <div style={{ maxWidth: 1200, padding: "0px", textAlign: "center", margin: "10px auto" }}>
      <h2>Sản phẩm</h2>
      <p>Các sản phẩm này được lấy từ APi</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px"}}>
        {data.map(product => (
          <div key={product.id} style={{border:"1px solid #ccc", padding:"10px"}}>
            <img src={product.image} alt={product.title} width="100" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
