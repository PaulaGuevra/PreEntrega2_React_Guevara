import React, { useContext } from "react";
import boxicons from 'boxicons';
import "./cartwidget.css"
import { DataContext, DataProvider } from "../../context/CartContext";

function CartWidget (){
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart;

  

    const  toogleMenu = () => {
        setMenu(!menu)
        
    }

    return (
        <DataProvider>
        <div onClick={toogleMenu}>
            <box-icon name="cart-alt"></box-icon>
            <span>{cart.length}</span>
        </div>
        </DataProvider>
    )
}

export default CartWidget;