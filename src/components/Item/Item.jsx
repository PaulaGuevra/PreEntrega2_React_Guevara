import React, { useContext } from "react";
import { Col, Card } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/CartContext";
import PropTypes from "prop-types";

const Item = ({ product }) => {
  const { addCart, updateTotalPrice } = useContext(DataContext);
  const addCartHandler = (productId, productPrice) => {
    addCart(productId, productPrice);
    return productPrice;
  };

  if (!product || !product.id) {
    return null; 
  }

  return (
    <Col>
      <Card className="card">
        <Link to={`/item/${product.id}`}>
          <Card.Img src={product.image} className="imgcard" />
        </Link>
        <Card.Title className="prod-name">{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <button className="addbtn" onClick={() => {
          const newTotalPrice = addCartHandler(product.id, product.price);
          updateTotalPrice(newTotalPrice);
        }}>
          Agregar al carrito
        </button>
      </Card>
    </Col>
  );
};



Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Item;
