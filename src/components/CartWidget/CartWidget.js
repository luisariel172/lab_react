import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './assets/carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    
    //consumo totalQuantity del CartContext
    const { getTotalQuantity } = useContext(CartContext)
    //aqui ejecuto la fn que viene de CartContext
    const totalQuantity = getTotalQuantity()
    return (
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget