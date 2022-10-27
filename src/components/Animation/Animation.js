import { useState, useEffect, useRef } from "react"

const Animation = () => {
    const [background, setBackground] = useState('pink')

    const divRef = useRef(10)
    //devuelve un objeto con una propiedad current
    // console.log(divRef);
    //cambio el valor la propiedad current 
    // divRef.current = 0
    console.log(divRef)


    useEffect(() => {
        const handleScroll = () => {
            // const div = document.getElementById('scroll')
            //console.log(div)
            //reemplazo el getElementById por el ref
            const div= divRef.current
            console.log(div)            
            //para conseguir la coordenada y al hacer scroll
            //console.log(div.getBoundingClientRect());
            //desestructuro los datos de getBoundingRect y recupero posicion y
            const { y } = div.getBoundingClientRect()

            const backgroundcolor = y <= -100 ? 'orange' : 'pink'

            setBackground(backgroundcolor)
            
            return () => window.removeEventListener('scroll', handleScroll)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return(
        <div>
            <div id='scroll'
                ref={divRef}
                style={{height: '180vh', background: background}}>
                <h1>Scrollear para cambiar el color del fondo</h1>
            </div>
        </div>
    )
}

export default Animation