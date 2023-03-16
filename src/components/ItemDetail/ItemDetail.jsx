import React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail(){
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={Item.image} alt={Item.name} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h3 className="name-detail">{Item.name}</h3>
                <p>{Item.description}</p>
                <ItemCount/>
            </div>
        </div>
    );
}
export default ItemDetail;