import { Col, Row,  Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
            <Card className="card" fluid>
                <Link to={`/item/${product.id}`}>
                    <Card.Img src={product.image} className="imgcard"/>
                </Link>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <ItemCount/>
                <Button>Agregar al Carrito</Button>
            </Card>
            </Col>
        </Row>
        
    );     
}

export default Item;