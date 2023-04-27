import React, { useContext, useState, useEffect } from "react";
import boxicons from 'boxicons';
import { Link } from "react-router-dom"; 
import "./cart.css";
import { DataContext } from "../../context/CartContext";
import Item from "../Item/Item";
import Image from 'react-bootstrap/Image'
import { addDoc, getFirestore, collection } from "firebase/firestore";

export const Cart = () => {
  const { menu, cart } = useContext(DataContext);
  const [menuOpen, setMenuOpen] = menu; 
  const [cartItems, setCartItems] = cart; 
  const { updateTotalPrice } = useContext(DataContext);
  const {addCart} = useContext(DataContext);
  

  const toggleFalse = () => {
    setMenuOpen(false);
  }

  const show1 = menuOpen ? "carts show" : "carts";
  const show2 = menuOpen ? "cart show" : "cart";

  useEffect(() => {
     updateTotalPrice(calculateTotalPrice());
  }, [cartItems]);
  
  const handleUpdateItem = (product, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        if (newQuantity <= 1) {
          item.quantity = 1;
          item.totalPrice = product.price;
        } else if (newQuantity >= product.stock) {
          newQuantity = product.stock;
         item.quantity = product.stock;
          item.totalPrice = product.price * product.stock;
        } else {
          item.quantity = newQuantity;
          item.totalPrice = product.price * newQuantity;
        }
      }   return item;
    });
    setCartItems(updatedCart);
    updateTotalPrice(calculateTotalPrice());
  };
  


  const handleRemoveItem = (product) => {
    const updatedCartItems = [...cartItems].filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
    updateTotalPrice(calculateTotalPrice());
  };
  
  const clearCart = () => {
    setCartItems([]);
    updateTotalPrice(0);
  };

  const showCart = () => {
    if (cartItems.length === 0) { 
      return (
        <div className="empty_div">
          <p className="empty_cart">Su carrito está vacío</p>
          <button className="shopbtn" onClick={() => setMenuOpen(false)}>Ir a comprar</button>
        </div>
      );
    } else {
      return (
        <ul>
          {cartItems.map((product) => ( 
            <li key={product.id}>
              <div className="cart_item">
                <div>
                  <h3>{product.name}</h3>
                  <Image fluid src={product.image} alt={product.name} />                            
                  <p className="price">${product.price}</p>
                </div>
                <div className="count">
                  <span className="cantidad">Cantidad</span>
                  <input type="number" min="1" 
                    max={product.stock} 
                    value={product.quantity ? product.quantity : 0}
                    onChange={(e) => {
                        const value = parseInt(e.target.value) || 1;
                        const newQuantity = value > product.stock ? product.stock : value;
                        handleUpdateItem(product, newQuantity);
                    }}
                    onInput={(e) => {
                        const value = parseInt(e.target.value) || 1;
                        const newQuantity = value > product.stock ? product.stock : value;
                        e.target.value = newQuantity;
                    }}
                    />
                </div>
                <div className="remove_item">
                    <box-icon name="trash" type="regular" color="#252525" onClick={() => handleRemoveItem(product)}></box-icon>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  };


  
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    updateTotalPrice(newTotalPrice);
  }, [cartItems]);
  
  const calculateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return newTotalPrice;
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart_close" onClick={toggleFalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="cart_center">
          <Item addToCart={addCart}/> 
          {showCart()}
          <div className="cart_footer">
           {cartItems.length !== 0 && <h3>Total: ${calculateTotalPrice()}</h3>}
            <Link to="/checkout">{cartItems.length !== 0 && <button className="paybtn">Ir a pagar </button>}</Link>
            {cartItems.length !== 0 && <button className="clearbtn" onClick={clearCart}>Vaciar mi carrito</button>}             </div>
            </div>
        </div>
        
    </div>
);

};

export default Cart;




