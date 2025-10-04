export default function About() {
  return (
    <div
      style={{ maxWidth: 800,margin: "40px auto",padding: "30px 20px",extAlign: "center", backgroundColor: "#f9f9f9",borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.1)",}}>
      <h2 style={{ textAlign:"center",fontSize: 28, marginBottom: 20, color: "#333" }}>Thông tin</h2>
      <p
        style={{
          fontSize: 16,lineHeight: 1.6,marginBottom: 15, color: "#555",}} >
        Ngày thực tập: <strong>4/10</strong>. Trong quá trình thực hành, có một số lỗi xảy ra do sử dụng dữ liệu tĩnh.
      </p>
      <p
        style={{fontSize: 16,lineHeight: 1.6,marginBottom: 15,color: "#555",}}>
        Ví dụ: Khi đăng ký hoặc đăng nhập, cần load lại trang để reset nút đăng xuất, vì dữ liệu hiện chỉ được lưu vào local vì k có database.
      </p>
      <p
        style={{  fontSize: 16,lineHeight: 1.6, marginTop: 20,color: "#777",fontStyle: "italic",}} >
        Đây là phiên bản demo
      </p>
    </div>
  );
}
