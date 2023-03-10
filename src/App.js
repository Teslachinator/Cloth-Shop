import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Helpers/ScrollToTop";
import Catalog from "./Pages/Catalog/Catalog";
import Favourites from "./Pages/Favourites/Favourites";
import Main from "./Pages/Main/Main";
import ShopCart from "./Pages/ShopCart/ShopCart";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/cart" element={<ShopCart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
