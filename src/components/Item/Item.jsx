import React, { useContext } from "react";
import { Col, Card } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/CartContext";

const Item = ({ product }) => {
  const value = useContext(DataContext);

  const addCartHandler = () => {
    // Check if addCart function is defined in the context
    if (value.addCart) {
      value.addCart(product);
    }
  };

  return (
    <Col>
      <Card className="card">
        <Link to={`/item/${product.id}`}>
          <Card.Img src={product.image} className="imgcard" />
        </Link>
        <Card.Title className="prod-name">{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <button className="addbtn" onClick={addCartHandler}>
          Agregar al carrito
        </button>
      </Card>
    </Col>
  );
};

export default Item;
