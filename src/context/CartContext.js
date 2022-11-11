// Este es el archivo componente de alto orden que va a contener el Provider
//Lo que vendria a ser un CUSTOM PROVIDER
import { findAllByDisplayValue } from "@testing-library/react"
import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children }) => {
    
    const [cart, setCart] = useState([])
    // const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart) 

     //fn que va agregando los items al carrito, porq aqui tengo acceso a serCart y cart, si el prod
  //ya esta en el carrito, no lo agrega
    const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
    } else {
        console.log('ya se agrego este producto');
    } 
}

//fn q controla si un prod esta en el carrito
const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

//fn q elimina prod del carrito
const removeItem = (id) => {
    const cardWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cardWithoutItem)
}

/* useEffect(() =>{
    const totalQuantity = getTotalQuantity()
    setTotalQuantity(totalQuantity)
}, [cart]) */

//funcion para agregar cantidad de items al CartWidget, se deberia volver a ejecutar al cargar mas prod al carrito
//para eso uso un useEffect, para sincronizar y escuchar el cambio del cart
const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod =>{
        totalQuantity += prod.quantity
    })
    return totalQuantity
}
//2° OPCION PARA MANEJAR CAMBIOS DE ESTADO(sin useEffect): en vez de totalQuantity compartir getTotalQuantity
//y ejecutarla en CartWidget.js
return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity }}>
            {children}
            </CartContext.Provider>    
    )
}



