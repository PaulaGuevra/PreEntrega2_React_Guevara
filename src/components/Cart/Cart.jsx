import React, { useContext } from "react";
import Delineador from "../../assets/delineador_en_gel.png";
import "boxicons";
import "./cart.css";
import { DataContext, DataProvider } from "../../context/CartContext";


export const Cart = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu

    const toogleFalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carts show" : "carts";
    const show2 = menu ? "cart show" : "cart";

    return (
        <DataProvider>
            <div className={show1}>
                <div className={show2}>
                    <div className="cart_close" onClick={toogleFalse}>
                    <box-icon name="x"></box-icon>
                    </div>
                    <h2>Su carrito</h2>
                    <div className="cart_center">
                        <div className="cart_item">
                        <img src={Delineador} alt="" />
                        <div>
                            <h3>Delineador en gel</h3>
                            <p className="price">$2300</p>
                        </div>
                        <div className="count">
                            <box-icon name="minus-circle" type="solid" color="#252525"></box-icon>
                            <p className="quantity">1</p>
                            <box-icon name="plus-circle" type="solid" color="#252525"></box-icon>
                        </div>
                        <div className="remove_item">
                            <box-icon name="trash" size="xs"></box-icon>
                        </div>
                        <div className="cart_footer">
                            <h3>Total: $0000</h3>
                            <button className="paybtn">Ir a pagar</button>
                        </div>
                        </div>

                    </div>
            </div>
            
        </div>
        </DataProvider>
        
    )
}