
export default function Banner() {
  return (
    <section className="container banner-section">
      <div className="banner">
        <div className="banner-content">

          <span className="banner-badge">
            ✨ ƯU ĐÃI ĐẶC BIỆT
          </span>

          <h1>
            Khám phá phong cách
            <br />
            <span>mua sắm mới!</span>
          </h1>

          <p>
            Chào mừng bạn đến với LKTShop.
            Khám phá hàng ngàn sản phẩm chất lượng
            với mức giá hấp dẫn và ưu đãi mỗi ngày.
          </p>

          <div className="banner-actions">
            <a href="#products" className="banner-btn">
              Mua ngay <span>→</span>
            </a>

            <a href="#products" className="banner-link">
              Khám phá sản phẩm
            </a>
          </div>

          <div className="banner-features">
            <div>
              <strong>12+</strong>
              <span>Sản phẩm</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Danh mục</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Hỗ trợ</span>
            </div>
          </div>

        </div>

        <div className="banner-visual">
          <div className="banner-circle"></div>

          <div className="banner-sale">
            <span>SALE UP TO</span>
            <strong>30%</strong>
            <span>OFF</span>
          </div>

          <div className="banner-product">
            <span className="product-emoji">🛍️</span>
            <h3>LKTShop</h3>
            <p>Shopping made easy</p>
          </div>

          <div className="banner-floating floating-one">
            🎧 Điện tử
          </div>

          <div className="banner-floating floating-two">
            👕 Thời trang
          </div>
        </div>

      </div>
    </section>
  );
}
