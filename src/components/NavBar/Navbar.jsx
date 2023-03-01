import "./navbar.css"
import Container from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logo.png"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import CartWidget from "../CartWidget/Cartwidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
    return (
        <Container fluid> 
            <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#home"><Image className="logo" src={logo} /></Navbar.Brand>
                <nav className="navbar">
                    <Form.Control className="navsearch" type="text" placeholder="Buscar Producto">
                    </Form.Control>
                    <button className="searchbtn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    <ul> 
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Productos</a></li>
                    </ul>
                    <CartWidget />    
                </nav>    
            </Navbar>    
        </Container>
    )
}

export default NavBar