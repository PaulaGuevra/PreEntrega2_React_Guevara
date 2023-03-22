import Item from "../Item/Item";
import "./itemlist.css";

function ItemList({products}){
    return(
        <div className="itemmap">
            {products.map((product) => (
            <Item key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default ItemList;