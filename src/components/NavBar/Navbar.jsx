import "./navbar.css";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import logo from "../../assets/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import CartWidget from "../CartWidget/Cartwidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <Container fluid> 
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home"><Image className="logo" src={logo} /></Navbar.Brand>
                <nav className="navbar">
                    <ul> 
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                   Productos
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Labiales</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Máscaras de pestañas</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Rubores</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Sombras</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li><Form.Control type="text" placeholder="Buscar Producto">
                        </Form.Control></li>
                        <li><button className="searchbtn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button></li>
                        <li><CartWidget /></li>
                    </ul>     
                </nav>    
            </Navbar>    
        </Container>
    )
}

export default NavBar