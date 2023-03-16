import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList";
import Products from "../../mocks/products";



function  ItemListContainer({categoryId, isCategoryRoute} ) {
    const [products, setProducts] = useState([]);
     
    useEffect(()=> {
        const productsPromise = new Promise((resolve, reject) =>
            setTimeout(()=> resolve(Products), 2000)
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
        <div className="itemlist" >
            <ItemList products={products}/>
        </div>       
    )
}

export default ItemListContainer;