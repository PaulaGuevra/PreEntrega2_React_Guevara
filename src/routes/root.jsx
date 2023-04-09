import React from "react";
import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";



function Root() {
  const params = useParams();
  const isCategoryRoute = (params.category);

  return (
    <DataProvider>
      <div>
      <Header/>
      <Cart/>
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.category} 
      />
      <Footer/>
    </div>
    </DataProvider>  
  )
  
}

export default Root;
