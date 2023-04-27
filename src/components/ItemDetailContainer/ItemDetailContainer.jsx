import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../config/FirebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
   const itemCollection = collection(db,'items');
    const itemRef = doc(itemCollection, id);
   
    const getItem = async () => {
      const TIME_OUT = 5000;
      let timer = setTimeout (() => {
      setLoading(false);
      setError("Error al cargar el producto.")
    }, TIME_OUT);

      try {
        const answer = await getDoc(itemRef);
        const dataDoc = {
          id: answer.id,
          ...answer.data()
        };
        setItem(dataDoc);
      }
      catch (error) {
        setError(error);
      }
      finally{
        setLoading(false)
        clearTimeout(timer);
      }
    }
    getItem();
}, [id]);
  return (
    <div>
     { loading ? <Spinner/> : error ? <p>{error}</p> : <ItemDetail item={item}/>}
    </div>
  );
}

export default ItemDetailContainer;
