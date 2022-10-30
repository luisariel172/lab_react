import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    // const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        // addItem(productToAdd)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: $ {price}
                </p>
                <p className="Info">
                    Disponibles: {stock}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
// const InputCount = ({onConfirm, stock, initial= 1}) => {
//     const [count, setCount] = useState(initial)

//     const handleChange = (e) => {
//         if(e.target.value <= stock) {
//             setCount(e.target.value)
//         }
//     }

//     return (
//         <div>
//             <input type='number' onChange={handleChange} value={count}/>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )
// }

// const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
//     const [count, setCount] = useState(initial)

//     const increment = () => {
//         // const stock = 15
//         if(count < stock) {
//             setCount(count + 1)
//         }
//     }

//     const decrement = () => {
//         // if (count > 0)
//             setCount(count - 1)
//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )
// }

// const ItemDetail = ({ id, name, img, category, description, price, stock, setCart }) => {
//     const [inputType, setInputType] = useState('button')
//     const [quantityToAdd, setQuantityToAdd] = useState(0)
//     console.log(quantityToAdd)

//     //FUNCION AGREGAR AL CARRITO
//     const handleOnAdd = (quantity) => {
//         console.log('agregue al carrito')
//         console.log(quantity)
//         setQuantityToAdd(quantity)
//         //el objeto setCart permite guardar lo que va a agregar el usuario al carrito
//         setCart({ id, name, price, quantity})
//     }

//     const Count = inputType === 'button' ? ButtonCount : InputCount

//     return (
//         <article className="CardItem">
//             <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
//             <header className="Header">
//                 <h2 className="ItemHeader">
//                     {name}
//                 </h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className="ItemImg"/>
//             </picture> 
//             <section>
//                 <p className="Info">
//                     Categoria: {category}
//                 </p>
//                 <p className="Info">
//                     Descripción: {description}
//                 </p>
//                 <p className="Info">
//                     Precio: {price} 
//                 </p>
//             </section>           
//             <footer className='ItemFooter'>
//                 {
//                     quantityToAdd === 0 ? (
//                         <Count onConfirm={handleOnAdd} stock={stock} />
//                     ) : (
//                         <Link to='/cart'>Finalizar compra</Link>
//                     )
//                 }
//             </footer>
//         </article>
//     )
// }

// export default ItemDetail