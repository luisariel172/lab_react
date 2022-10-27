import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

//   const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res)
        setProducts(res)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

//al Event Listener es importante realizarlo dentro de un hook useEffect para 
//q se cargue despues del montaje y tb p/ poder controlar los estados del
// ciclo de vida
useEffect(() =>{
    const onResize = () => console.log('Cambie de tamaño')
    window.addEventListener('resize', onResize)
    //al removeEvLi se lo coloca en el return del useEfecct para q se ejecute cuando el componente se desmonte
    return () => window.removeEventListener('resize', onResize)
}, [])

  // const productosTransformados = products.map(product => <li key={product.id}>{product.name}</li>)
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  return (
    <div className="ItemListContainer" style={{backgroundColor:'green', height:'100vh' }}onClick={() => console.log('hice click en Itemlistcontainer')}>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
