import { Link } from "react-router-dom"

const ItemList = ({ products }) => {
    return (
        // <ul className={true ? 'una-clase' : 'otra-clase'}>
         <ul style={{display: 'flex', flexDirection: 'column'}}>
            { products.map(product => <Link to={`/detail/${product.id}`}key={product.id}>{product.name}</Link>) }
            {/* { false ? <h1>hola</h1> : <h1>chau</h1>} */}
        </ul>
    )
}

export default ItemList