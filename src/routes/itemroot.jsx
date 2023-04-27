import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { DataProvider } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";


function ItemRoot() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

 
  useEffect(() => {
    getDoc(doc(db, "items", id)).then((doc) => {
      if (doc.exists) {
        setItem({ id: doc.id, ...doc.data() });
         } else {
        console.log("No such document!");
      }
    });
  }, [db, id]);

  return (
    <DataProvider>
      <div>
        <Header />
        <Cart />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemDetailContainer id={id} />
        </div>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default ItemRoot;


