import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";

function Root() {

  const params = useParams();
  const isCategoryRoute = (params.category);

  return (
    <div>
      <Header/>
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.category} 
      />
      <Footer/>
    </div>
    
  )
  
}

export default Root;
