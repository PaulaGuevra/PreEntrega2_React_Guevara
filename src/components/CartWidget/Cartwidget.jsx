import React, { useContext } from "react";
import "boxicons";
import "./cartwidget.css"
import { DataContext } from "../../context/CartContext";

function CartWidget (){
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;

    const  toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div onClick={toogleMenu}>
            <box-icon name="cart-alt"></box-icon>
            <span>{cart.lenght}</span>
        </div>
    )
}

export default CartWidget;