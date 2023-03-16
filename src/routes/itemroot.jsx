import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
    const params = useParams();
    const isItemRoute = Boolean(params.id);
  return (
    <div>
      <Header/>
      <ItemDetailContainer isItemRoute={isItemRoute} />
      <Footer/>
    </div>
    
  )
  
}

export default ItemRoot;