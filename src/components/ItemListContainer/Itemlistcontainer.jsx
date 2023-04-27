import { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { DataContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import {  collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import { Spinner } from "react-bootstrap";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const { productList } = useContext(DataContext);

  useEffect(() => {
    const productCollection = collection(db, 'items');
    const request = categoryId ? query(productCollection, 
      where('category', '==', categoryId)
    ) : productCollection;

    const getItem = async () => {
      try {
        const queryAnswer = await getDocs(request);
        const itemsRef = queryAnswer.docs.map(item => {
          return{
            ...item.data(),
            id: item.id,
          };
        })
        setProducts(itemsRef)
      } catch(error){
        setError(error);
      }
      finally{
        setIsLoading(false);
      }
    };    getItem();
  }, [categoryId]);
  
  useEffect(()=>{
    productList(products);
  }, [products, productList])

  return (
    <div>
      {isLoading && <h1>Loading...</h1> && <Spinner/>}
      {error && <h1>{error.message}</h1>}
      {products.length > 0 && <ItemList products={products} key={categoryId} />}
    </div>
  );
}
export default ItemListContainer;