import React, { useContext } from "react";
import boxicons from 'boxicons';
import "./cartwidget.css"
import { DataContext, DataProvider } from "../../context/CartContext";
import Badge from 'react-bootstrap/Badge';

function CartWidget (){
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart;

  

    const  toogleMenu = () => {
        setMenu(!menu)
        
    }

    return (
        <DataProvider>
        <div className="cart_icon" onClick={toogleMenu}>
            <box-icon name="cart-alt"></box-icon>
            <Badge pill bg="secondary">{cart.length}</Badge>
        </div>
        </DataProvider>
    )
}

export default CartWidget;