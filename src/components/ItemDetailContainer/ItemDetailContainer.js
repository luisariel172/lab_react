import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
//hook que me permite agarrar los parametros de la url
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

//traigo fn setCart desde App
const ItemDetailContainer = ({ setCart }) => {
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
    return <h1>Cargando producto ...</h1>
}

    return(
        <div className='ItemDetailContainer'>
            {/* traigo fn setCart desde App */}
           <ItemDetail {...product} setCart={setCart}/> 
           {/*exparsir--> {...product}={name:product.name, img: product.img} */}
           {/* con {...product} me ahorro de escribir todas las props */}
        </div>
    )
}

export default ItemDetailContainer