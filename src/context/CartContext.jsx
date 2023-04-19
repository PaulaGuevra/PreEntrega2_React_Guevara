import React, { useState, useEffect, createContext, useMemo} from "react";
import Products from "../mocks/Products";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        const product = Products
        setProducts(product)
    }, [...cart])

    

    function addCart(id) {
        const isInCart = cart.some(item => item.id === id);
        if (isInCart) {
            alert('El producto ya se encuentra en el carrito.');
        } else {
            const itemToAdd = products.find(item => item.id === id);
            setCart([...cart, itemToAdd]);
        }
    }

      function showCart() {
        const { cart } = useContext(DataContext);
      
        if (cart.length === 0) {
          return (<p>You haven't added any products yet</p>);
        } else {
      
            return (
            <ul>
                {cart.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
                ))}
            </ul>
            );
        }
      }
      
      

      const memoizedValue = useMemo(() => {
        return {
          products,
          menu: [menu, setMenu], 
          cart: [cart, setCart],
          addCart,
          showCart
        };
      }, [products, menu, setMenu, addCart, cart, setCart]);
    
      

    return(
        <DataContext.Provider value={memoizedValue}>
            {props.children}
        </DataContext.Provider>

    )
}
