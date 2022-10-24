const ItemList = ({ products }) => {
    return (
        <ul className={true ? 'una-clase' : 'otra-clase'}>
            { products.map(product => <li key={product.id}>{product.name}</li>) }

            { false ? <h1>hola</h1> : <h1>chau</h1>}
        </ul>
    )
}

export default ItemList