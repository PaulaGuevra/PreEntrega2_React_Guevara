import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList";


function  ItemListContainer({categoryId, isCategoryRoute} ) {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const productsPromise = new Promise((resolve, reject) =>
            setTimeout(()=> resolve(products), 2000)
        );

        productsPromise
            .then((response)=> {
                if(isCategoryRoute){
                    const productsFiltered = response.filter(
                        ({product}) => product.category === categoryId
                    );
                    setProducts(productsFiltered);
                } else {
                    setProducts(response);
                }
            })
            .catch((err) => alert(err));
    }, [categoryId]);

    return (
        <div >
            <ItemList products={products}/>
            <ItemCount/>
           <p style={{color:"#f6549c", padding:"20px", margin:"160px", background:"#dcdcdc"}}> {categoryId} </p> 
        </div>       
    )
}

export default ItemListContainer;