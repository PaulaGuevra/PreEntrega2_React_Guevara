import "./header.css"
import NavBar from "../NavBar/Navbar"
import Container from "react-bootstrap/Container"


function Header(){
 return ( 
  <Container fluid>
    <header className="header">
      <NavBar />
   </header>
  </Container>
 )
}

export default Header