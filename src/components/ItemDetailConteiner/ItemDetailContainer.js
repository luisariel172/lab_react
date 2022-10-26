import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
//hook que me permite agarrar los parametros de la url
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) //1ra forma de validar p/mostrar detalle de producto, con {}
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
    }, [])
    // console.log(fetch(''));

    // console.log(product);
if(loading){
    return <h1>Cargando ...</h1>
}

    return(
        <div>
            <h1>Detalle de producto</h1>
            {/*En el componente idemDetail le paso todas las props para que las pueda listar, 2da parte del desafio
            Esta seria la card que mostrara los detalles del producto que le estoy pasando por props.
            Aqui desestructuro las propiedades del obejto y cada una se le asigna como ke:value*/}
            {/* <ItemDetail {...product}/> */}
            <div>
            <h2>{product?.name}</h2> {/*3ra forma de validar, con el ternario */}
               {/* <h3>{product.price}</h3>  */}
            </div>
        </div>
    )
}

export default ItemDetailContainer