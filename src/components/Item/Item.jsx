import React, { useContext} from "react";
import { Col, Row,  Card } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/CartContext";

const Item = ({product}) => {
    
    const value = useContext(DataContext);
    const addCart = value.addCart;
  

    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
            <Card className="card">
                <Link to={`/item/${product.id}`}>
                    <Card.Img src={product.image} className="imgcard"/>
                </Link>
                <Card.Title className="prod-name">{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <button className="addbtn" onClick={console.log("uno")}>Agregar al carrito</button>
            </Card>
            </Col>
        </Row>
        
    );     
}

export default Item;