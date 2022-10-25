import { useState, useEffect } from "react"

const MercadoLibre = () => {
    
    //Estado en donde guardo los productos
    const [products, setProducts] = useState([])
    //Para configurar el buscador de productos, Si tengo un dato lo guardo en un estado
    const [input, setInput] = useState('')

    // useEffect(() => {
    //     // console.log(fetch(''))
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
    //         .then(response => {
    //             return response.json()
    //             //en vez de ejecutar directamente el then y el catch, los retornar la promesa, la saco para afuera. Si no la retorno me devuelve undefined
    //             /*.then(res => {
    //                 console.log(res);
    //             }).catch(err=>{
    //                 console.log(err);
    //             })*/
    //         }).then (res => {
    //             //console.log(res.results);
    //             //hasta aqui consegui los productos, los guardo en un estado (useState), guardando la propiedad "results" en el estado
    //             //El estado se usa para que React pueda volver a ejecutar la funcion
    //             //Hasta aqui tengo un array con productos, debo pasarlo a componente con el metodo map
    //             setProducts(res.results.slice(0,10))
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },[])

    console.log(products);

    const handleSearch = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
                //en vez de ejecutar directamente el then y el catch, los retornar la promesa, la saco para afuera. Si no la retorno me devuelve undefined
                /*.then(res => {
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })*/
            }).then (res => {
                setProducts(res.results.slice(0,10))
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <h1>MercadoLibre</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSearch}>Buscar</button>
            {products.map(product => <div key={product.id}>
            <img src={product.thumbnail} alt={product.title}/>
            {product.title}</div>)}
        </div>
    )
}

export default MercadoLibre