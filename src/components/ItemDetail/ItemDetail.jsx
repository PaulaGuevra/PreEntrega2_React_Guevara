import React from "react";
import ItemCount from "../ItemCount/ItemCount";
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
                <p>{details.price}</p>
                <ItemCount/>
            </div>
        </div>
        
    );
}
export default ItemDetail;