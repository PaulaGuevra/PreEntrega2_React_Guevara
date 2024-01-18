import React, { useState, useEffect, useMemo, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/FirebaseConfig';


export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
//Traer los productos de firebase
  useEffect(() => {
    async function fetchData() {
      const data = await getDocs(collection(db, "items"));
      const fetchedProducts = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);

  //Añadir producto al carrito
  function addCart(id, productPrice) {
    const isInCart = cart.some((item) => item.id === id);
    if (isInCart) {
      alert("El producto ya se encuentra en el carrito.");
    } else {
      const productToAdd = products.find((product) => product.id === id);
      if (productToAdd) {
        const itemToAdd = {
          id: id,
          name: productToAdd.name,
          image: productToAdd.image,
          quantity: 1,
          price: productPrice,
          totalPrice: productPrice,
        };
        setCart([...cart, itemToAdd]); 
        return { name: productToAdd.name, image: productToAdd.image };
      } else {
        alert("No se encuentra el producto en la lista.");
      }
    }
  }
  
  // Actualizar el precio total
function updateTotalPrice(price) {
  setTotalPrice(price);
}

//Calcular el precio total
useEffect(() => {
  let price = 0;
  cart.forEach((product) => {
    price += product.price * product.quantity;
  });
  updateTotalPrice(price);
}, [cart]);

  
 

  //set a useState to save the list of products to be used in the search bar
  const [searchProducts, setSearchProducts] = useState([]);
  const productList = (ListGroup) => setSearchProducts(ListGroup);

  const memoizedValue = useMemo(() => {
    return {
      products,
      menu: [menu, setMenu],
      cart: [cart, setCart],
      addCart,
      totalPrice,
      updateTotalPrice,
      searchProducts,
      productList
    };
  }, [products, menu, cart, setCart, addCart, totalPrice, updateTotalPrice, searchProducts, productList]);

  return (
    <DataContext.Provider value={memoizedValue}>
      {props.children}
    </DataContext.Provider>
  );
};
