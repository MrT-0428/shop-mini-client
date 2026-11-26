export default function Footer() { 
    const year = new Date().getFullYear(); 
    return ( 
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            LKT<span>Shop</span>
          </a>
          <p>Thiên đường mua sắm với sản phẩm chất lượng và giá tốt mỗi ngày.</p>
        </div>

        <div className="footer-links">
          <h3>Liên kết</h3>
          <a href="/">Trang chủ</a>
          <a href="/products">Sản phẩm</a>
          <a href="/about">Giới thiệu</a>
        </div>

        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <p>☎ 035 8822 605</p>
          <p>✉ toan042805@gmail.com</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} LKTShop. Bài tập môn Công nghệ lập trình hiện đại.</p>
      </div>
    </footer>
    ); 
}