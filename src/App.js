import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BtnShopCart from "./Components/BtnShopCart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Helpers/ScrollToTop";
import Catalog from "./Pages/Catalog/Catalog";
import Favourites from "./Pages/Favourites/Favourites";
import Main from "./Pages/Main/Main";
import ShopCart from "./Pages/ShopCart/ShopCart";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/main" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
