import React from "react";
import Products from "../../mocks/Products";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({details}){
    console.log(details);
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src="{details.image}" className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h3 className="name-detail">{details.Item}</h3>
                <p>{details.description}</p>
                <ItemCount/>
            </div>
        </div>
        
    );
}
export default ItemDetail;