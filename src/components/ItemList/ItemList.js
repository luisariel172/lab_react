import { Link } from "react-router-dom"

const ItemList = ({ products }) => {    

    const handleClick = (e) => {
        //detiene la propagacion del evento a los ancestos
        e.stopPropagation()
        console.log('hice click en Itemlist')
    }

    const handleSubmit = (e) => {
        //detiene la accion por defecto del submit, que es recargar la pagina
        e.preventDefault()

    }

    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'column', backgroundColor: 'red'}} onClick={handleClick}>
                { products.map(product => <Link to={`/detail/${product.id}`}key={product.id}>{product.name}</Link>) }
            </ul>
            <form onSubmit={handleSubmit}>
                <input />
                <button onClick={() => console.log ('submit del form') }>Submit</button>
            </form>
        </div>
    )
} 

export default ItemList