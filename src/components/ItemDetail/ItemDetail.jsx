import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import "./itemdetail.css";

function ItemDetail({details}){
    console.log(details);
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={details.image} className="imgdet" />
            </div>
            <div className="col-md-4 detalles">
                <h3 className="name-detail">{details.name}</h3>
                <p>{details.description}</p>
                <ItemCount/>
                <Button>Agregar al Carrito</Button>
            </div>
        </div>
        
    );
}
export default ItemDetail;