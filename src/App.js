import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Details from "./pages/Details";
import MyOrders from "./pages/MyOrders";
import Page from "./pages/Page";
import MyCart from "./pages/MyCart";

function App() {
  const [clicked, setisClciked] = useState(false);

  const onClicked = () => {
    setisClciked(true);
  };

  return (
    <div className="App">
      <Header setisClciked={setisClciked} />
      <Routes>
        <Route
          path="/product"
          element={<Page clicked={clicked} onClicked={onClicked} />}
        >
          <Route path=":productId" element={<Details />} />
        </Route>
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOders" element={<MyOrders />} />
      </Routes>
      <div />
    </div>
  );
}

export default App;
