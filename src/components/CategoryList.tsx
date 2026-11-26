
type Props = {
  categories: string[];
};

export default function CategoryList({ categories }: Props) {
  const categoryIcons: Record<string, string> = {
    "Thời trang": "👕",
    "Điện tử": "🎧",
    "Gia dụng": "🏠",
    "Phụ kiện": "🛍️",
  };

  return (
    <section className="container category-section">
      <h2 className="category-heading">
        Danh mục sản phẩm
      </h2>

      <div className="category-list">
        {categories.map((category) => (
          <button className="category-card" key={category}>
            <span className="category-icon">
              {categoryIcons[category] ?? "🛒"}
            </span>
            <span className="category-name">{category}</span>
            <span className="category-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  );
}
