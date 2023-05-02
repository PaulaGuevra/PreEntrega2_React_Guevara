import React, { useState } from "react";
import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";
import Form from "../components/Form/Form";

function Root() {
  const params = useParams();
  const isCategoryRoute = (params.category);
  const [cartAndForm, setCartAndForm] = useState({
    showForm: false,
    cartItems: [],
  });

  const handleCartUpdate = (updatedCart) => {
    setCartAndForm({ ...cartAndForm, cartItems: updatedCart });
  };

  const handleCheckout = () => {
    setCartAndForm({ ...cartAndForm, showForm: true });
  };

  const handleConfirmation = () => {
    setCartAndForm({ ...cartAndForm, showForm: false });
  };

  return (
    <DataProvider>
      <div>
        <Header />
        <Cart handleCartUpdate={handleCartUpdate} handleCheckout={handleCheckout} />
        <ItemListContainer
          isCategoryRoute={isCategoryRoute}
          categoryId={params.category}
        />
        <Footer />
        {cartAndForm.showForm && (
          <Form
            cartItems={cartAndForm.cartItems}
            handleCartUpdate={handleCartUpdate}
            handleConfirmation={handleConfirmation}
          />
        )}
      </div>
    </DataProvider>
  );
}

export default Root;
