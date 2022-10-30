import './CartWidget.css'
import cart from './assets/carrito.svg'

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            5
        </div>
    )
}

export default CartWidget