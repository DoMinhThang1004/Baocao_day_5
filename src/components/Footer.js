export default function Footer() {
  return (
    <footer style={{ background: "#4b4a4aff", color: "#fff", padding: "30px 20px", marginTop: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", textAlign: "left",maxWidth: "1000px",margin: "auto"}}>

        <div>
          <h3 style={{ color: "#f0c040" }}>Timi Store</h3>
          <p>Chào mừng đến với cửa hàng chúng tôi</p>
        </div>
        <div>
          <h4 style={{ marginBottom: "10px", color: "#f0c040" }}>Trang</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><a href="/" style={{ color: "#ddd", textDecoration: "none" }}>Home</a></li>
            <li><a href="/about" style={{ color: "#ddd", textDecoration: "none" }}>About</a></li>
            <li><a href="/products" style={{ color: "#ddd", textDecoration: "none" }}>Products</a></li>
            <li><a href="/login" style={{ color: "#ddd", textDecoration: "none" }}>Login</a></li>
          </ul>
        </div>
        <div>
            <h4 style={{ marginBottom: "10px", color: "#f0c040" }}>Liên hệ</h4>
            <p>Email: dominhthang101004@gmail.com</p>
            <p>Phone: +84 986132149</p>
            <p>Address: Tp.HCM, Việt Nam</p>
        </div>
        </div>
      <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" }}>
        <p>Bài thực hành ngày 4/10</p>
      </div>
    </footer>
  );
}
