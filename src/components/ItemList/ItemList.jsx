import Item from "../Item/Item";
import "./itemlist.css";

function ItemList({products}){
    return(
        <div>
            <ul className="prodList">
                 {products.map((product) => (
                 <Item key={product.id} product={product}/>
                ))}
            </ul>
            
        </div>
    );
}

export default ItemList;