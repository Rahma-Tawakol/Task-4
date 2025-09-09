import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductRow from "./components/ProductRow";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div id="root-layout">
      <Header />
      <main>
        <div>
          <HeroSection />
          <div class="break">
            <div class="line"></div>
            <h2 className="productRowLabel">Customer Favorites</h2>
            <div class="line"></div>
          </div>
          <ProductRow />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;