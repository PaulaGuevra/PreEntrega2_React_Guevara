import React, { useState, useContext } from "react";
import "./form.css";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import { DataContext } from "../../context/CartContext";
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
      setError("Please fill in all fields.");
      return;
    }

    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    const order = {
      buyer: formData,
      items: cart,
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
    <div className="form-container">
      <Cart>
        {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </Cart>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <h2>Order Form</h2>
          {error && <div>{error}</div>}
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
