import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

function CheckoutRoot() {
  const [cartAndForm, setCartAndForm] = useState({
    cartItems: [],
    showForm: false,
  });

  const handleCartUpdate = (items) => {
    setCartAndForm({ ...cartAndForm, cartItems: items });
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
        <Cart cartItems={cartAndForm.cartItems} handleCartUpdate={handleCartUpdate} handleCheckout={handleCheckout} />
        <Form handleConfirmation={handleConfirmation} showForm={cartAndForm.showForm} />
        <Footer />
      </div>
    </DataProvider>
  );
};
export default CheckoutRoot;
