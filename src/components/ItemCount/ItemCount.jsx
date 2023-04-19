import React, { useContext, useState} from "react";
import "./itemcount.css";
import { DataContext } from "../../context/CartContext";
import Products from "../../mocks/Products";

function ItemCount({
  stock = Products.stock, initial = 1,
}) {
  const [counter, setCounter] = useState(initial);
  const handleAddItem = () => { counter < stock && setCounter(counter + 1); };
  const handleRemoveItem = () => { counter > 0 && setCounter(counter - 1); };

  const value = useContext(DataContext);
  const addCart = value.addCart;

  return (
    <div>
      <button className="resbtn" onClick={handleRemoveItem}>-</button>
      <span className="cantidad">{counter}</span>
      <button className="sumbtn" onClick={handleAddItem} disabled={counter === stock}>+</button>
      <button className="addbtn" onClick={() => addCart(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
