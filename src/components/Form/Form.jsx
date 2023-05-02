import React, { useState, useContext } from "react";
import { DataContext } from "../../context/CartContext";
import "./form.css";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import Cart from "../Cart/Cart";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const { cart, updateTotalPrice } = useContext(DataContext);
  const finalPrice = updateTotalPrice();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.email || !formData.phone) {
      setError("Por favor complete todos los datos");
      return;
    }

    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    const items = cart.map((item) => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity }));
    const order = {
      buyer: formData,
      items,
      totalPrice: finalPrice,
      date: Timestamp.fromDate(new Date()),
    };

    addDoc(collectionRef, order)
      .then((response) => console.log({ response }))
      .catch((error) => console.log({ error }));

    //Reset form data
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div className="cart-container">
        <Cart/>
      </div>
      <div className="form-content">
        <form className="form-details" onSubmit={handleSubmit}>
          <h2>Order Form</h2>
           {error && <div>{error}</div>}
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="lastName">Apellido:</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} />

          <button type="submit">Finalizar compra</button>
        </form>
      </div>
    </div>
  );
}

export default Form;