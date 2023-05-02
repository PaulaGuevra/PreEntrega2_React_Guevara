import React from "react";
import Cart from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";
function CartRoot(){
    return (
        <DataProvider>
        <Cart/>
        </DataProvider>
    )
};
export default CartRoot;