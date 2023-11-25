import Header from "./Header";
import Product from "./Product";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shoppingcart from "./Shoppingcart";
import { useEffect, useState } from "react";
import commerce from "./lib/commerce";
import Thankyou from "./Thankyou";
import Footer from "./Footer";

function App() {

  const [productsList, setproductlist] = useState([]);
  const [productsListByCategory, setproductlistByCategory] = useState([]); //product in category list
  const [categoryList, setcategorylist] = useState([]); //category list
  const [cart, setcart] = useState([]);

  const fetchproducts = async (category) => {
    const response = await commerce.products.list({
      category_slug: [category]
    });
    setproductlistByCategory(response.data);
  }
  const fetchproductsByCategory = async () => {
    const response = await commerce.products.list();
    setproductlist(response.data);
  }
  const addTocart = async (prodId, qty) => {
    const response = await commerce.cart.add(prodId, qty);
    setcart(response.data);
  }

  const fetchcart = async () => {
    setcart(await commerce.cart.retrieve())
  }

  const removefromcart = async (prodId) => {
    const response = await commerce.cart.remove(prodId);
    setcart(response.cart);
  }
  const fetchcategories = async () => {
    const response = await commerce.categories.list();
    setcategorylist(response.data);
  }
  useEffect(() => {
    fetchproducts();
    fetchcart();
    fetchcategories();
  }, [])
  return (
    <Router>
      <div className="App">
        <Header cart={cart} categoryList={categoryList} />
        <Switch>
          <Route exact path="/">
            <div className="banner">
              <img src="https://m.media-amazon.com/images/I/71gbdEe+82L._SX3000_.jpg" alt="" />
            </div>
            <Product productsList={productsList} addTocart={addTocart} />
            <Footer />
          </Route>

          <Route exact path="/cart">
            <Shoppingcart cart={cart} removefromcart={removefromcart} />
            <Footer />
          </Route>

          <Route exact path="/category/:slug">
            <div style={{ marginBottom: "320px" }}></div>
            <Product productsList={productsListByCategory} fetchproductsByCategory={fetchproductsByCategory} addTocart={addTocart} />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
          <Route exact path="/thankyou">
            <Thankyou />
          </Route>

        </Switch>
      </div >
    </Router >
  );
}

export default App;
