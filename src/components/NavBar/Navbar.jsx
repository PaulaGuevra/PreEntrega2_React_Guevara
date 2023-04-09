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
import { NavLink, Link } from "react-router-dom";


function NavBar() {
    return (
        <Container fluid> 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><NavLink as={Link} to={"/"}><Image className="logo" src={logo} /></NavLink></Navbar.Brand>
                <nav className="navbar">
                    <ul> 
                        <li><NavLink as={Link} to={"/"}>Inicio</NavLink></li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                   Categorías
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item ><NavLink as={Link} to={"/category/Ojos"}>Ojos</NavLink></Dropdown.Item>
                                    <Dropdown.Item ><NavLink as={Link} to="/category/Labios"> Labios</NavLink></Dropdown.Item>
                                    <Dropdown.Item ><NavLink as={Link} to={"/category/Rostro"}>Rostro</NavLink></Dropdown.Item>
                                    <Dropdown.Item ><NavLink as={Link} to={"/category/Brochas"}>Brochas</NavLink></Dropdown.Item>
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