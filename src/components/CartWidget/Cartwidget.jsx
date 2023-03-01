import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./cartwidget.css"

function CartWidget (){
    return (
        <div>
            <FontAwesomeIcon className='cart' icon={faShoppingCart}  />
            <span>0</span>
        </div>
    )
}

export default CartWidget