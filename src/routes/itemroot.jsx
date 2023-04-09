import React from "react";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";


function ItemRoot() {
    const params = useParams();
    const product = (params.id);
  return (
    <DataProvider>
      <div>
      <Header/>
      <Cart/>
      <ItemDetailContainer id={product} />
      <Footer/>
    </div>
    </DataProvider>
    
  )
  
}

export default ItemRoot;