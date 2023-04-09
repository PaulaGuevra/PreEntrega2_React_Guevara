import React, { useState, useEffect, createContext} from "react";
import Products from "../mocks/Products";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        const product = Products
        setProducts(product)
    }, [])

    const addCart =(id) => {
        const check = cart.every(item => {
            return item.id !== id;
        })
        if(check) {
           const data = products.filter(product =>{
            return product.id === id
           }) 
           setCart([...cart, ...data])
        }else {
            alert("El producto ya se encuentra en el carrito.")
        }
    }

    const value = {
        products : [products],
        menu : [menu, setMenu], 
        addCart: addCart,
        cart: [cart, setCart]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>

    )
}
