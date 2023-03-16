import products from "../../mocks/products.jsx";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({itemId, isItemRoute}){
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const detailsPromise = Promise.resolve(products);

        detailsPromise
        .then((response) => setDetails(response))
        .catch((err)=> alert(err));
    }, [itemId]);
    return(
        <div>
            <ItemDetail details={details}/>
        </div>
        );
}
export default ItemDetailContainer;


    