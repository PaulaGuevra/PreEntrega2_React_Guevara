import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <Link to={`/item/${product.id}`}>
            <Card className="card" fluid>
                <Card.Img src={product.image} className="imgcard"/>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <ItemCount/>
                <Button>Agregar al Carrito</Button>
            </Card>
        </Link>
        
    );     
}

export default Item;