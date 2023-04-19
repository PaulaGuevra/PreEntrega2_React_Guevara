import "./header.css";
import NavBar from "../NavBar/Navbar";
import Container from "react-bootstrap/Container";
import Cart from "../Cart/Cart";
import { DataProvider} from "../../context/CartContext";


function Header(){
 return ( 
  <Container fluid>
    <header className="header">
      <NavBar />
      <DataProvider>
        <Cart/>
      </DataProvider>
     
   </header>
  </Container>
 )
}

export default Header