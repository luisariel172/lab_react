import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
//hook que me permite agarrar los parametros de la url
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState() //1ra forma de validar p/mostrar detalle de producto, con {}
    const [loading, setLoading] = useState (true) //2da forma de validar ...
    //desestructuro el parametro y le paso productId al getProduct
    const { productId } = useParams()

    useEffect(() => { 
        getProduct(productId).then(response => {
            // console.log(response)
            setProduct (response)
            }).finally(() => {
                setLoading(false)
            })
    }, [productId])
    // console.log(fetch(''));

    // console.log(product);
if(loading){
    return <h1>Cargando ...</h1>
}

    return(
        <div className='ItemDetailContainer'>
           <ItemDetail {...product} addItem={addItem}/> 
        </div>
    )
}

export default ItemDetailContainer