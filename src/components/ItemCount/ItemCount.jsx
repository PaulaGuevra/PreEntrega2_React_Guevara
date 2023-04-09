import React, { useContext } from "react";
import "./itemcount.css";
import { useState } from 'react';
import { DataContext } from "../../context/CartContext";

const ItemCount = ({
                      stock,
                      initial = 1,
                    }) => {
                            const [counter, setCounter] = useState(initial);
                            const handleAddItem = () =>  { setCounter(counter + 1) };
                            const handleRemoveItem = () => {counter > 0 && setCounter(counter - 1)};

                            const value = useContext(DataContext);
                            const addCart = value.addCart;

                                //return (
                                  //<div>
                                    //<button className="resbtn" onClick={handleRemoveItem}>-</button>
                                    //<span className="cantidad">{counter}</span>
                                    //<button className="sumbtn" onClick={handleAddItem}>+</button>
                                    //<button className="addbtn" onClick={console.log("dos")}>Agregar al carrito</button>
                                  //</div>
                                //);
                            };

export default ItemCount;