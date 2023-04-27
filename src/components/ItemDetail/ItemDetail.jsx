import React, { useContext, useState } from "react";
import "./itemdetail.css";
import { DataContext } from "../../context/CartContext";

function ItemDetail({item}){
    const { addCart } = useContext(DataContext);

    const addCartHandler = (counter) => {
        addCart(item.id, item.price * counter);
    };
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} className="imgdet" />
            </div>
            <div className="col-md-4 detalles">
                <h3 className="name-detail">{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button className="addbtn" onClick={() => addCartHandler(1)}>
                Agregar al carrito
            </button>
            
            </div>
        </div>
        
    );
}
export default ItemDetail;
