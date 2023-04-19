import React, { useContext } from "react";
import boxicons from 'boxicons';
import "./cart.css";
import { DataContext } from "../../context/CartContext";
import Item from "../Item/Item";
import Products from "../../mocks/Products";

export const Cart = () => {
    const { menu, cart } = useContext(DataContext);
    const [menuOpen, setMenuOpen] = menu; // Renamed variable to make it clearer

    const toggleFalse = () => {
        setMenuOpen(false);
    }

    const show1 = menuOpen ? "carts show" : "carts";
    const show2 = menuOpen ? "cart show" : "cart";

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="cart_close" onClick={toggleFalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="cart_center">
                    {cart.map((product, index) => (
                        <div className="cart_item" key={index}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h3>{product.name}</h3>
                                <p className="price">${product.price}</p>
                            </div>
                            <div className="count">
                                <box-icon name="minus-circle" type="solid" color="#252525"></box-icon>
                                <p className="quantity">1</p>
                                <box-icon name="plus-circle" type="solid" color="#252525"></box-icon>
                            </div>
                            <div className="remove_item">
                                <box-icon name="trash" size="xs"></box-icon>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart_footer">
                    <h3>Total: ${cart.reduce((total, product) => total + product.price, 0)}</h3>
                    <button className="paybtn">Ir a pagar</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

