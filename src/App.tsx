
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import CategoryList from "./components/CategoryList";
import "./App.css";

function App() {
  const categories = [...new Set(products.map((p) => p.category))];
  return (
    <>
      <Header />

      <main>
        <Banner />
        
        <CategoryList categories={categories} />

        <ProductList
          title="Sản phẩm nổi bật"
          items={products}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
