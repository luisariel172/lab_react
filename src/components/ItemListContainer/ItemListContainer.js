import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  //aqui guardo los productos 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then((response) => {
        // console.log(response)
        setProducts(response)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  // const productosTransformados = products.map(product => <li key={product.id}>{product.name}</li>)
  if (loading && true) {
    return <h1>Cargando productos...</h1>;
  }

  // if (error) {
  //   return <h1>Hubo un error</h1>;
  // }

  return (
    <div onClick={() => console.log('Click en Itemlistcontainer')}>
      <h1>{`${greeting} ${categoryId || ''}`} </h1>
      {/* <button onClick={(e) => console.log(e)}>Boton</button> */}
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;
