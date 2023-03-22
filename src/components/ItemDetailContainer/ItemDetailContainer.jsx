import Products from "../../mocks/Products.jsx";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer({id}){
    const [details, setDetails] = useState({});

    useEffect(() => {
        const detailsPromise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(Products.find(product => product.id == id)), 2000)
        );

        detailsPromise
        .then((response) => setDetails(response))
        .catch((err)=> alert(err));
    }, [id]);
    return(
        <div>
            <ItemDetail details={details}/>
        </div>
        );
}
export default ItemDetailContainer;


    