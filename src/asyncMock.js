const products = [
{
    id: '1',
    name: 'Souvenir Bautismo - Anotador',
    price: 790,
    category: 'souvenirs',
    img:'https://i.ibb.co/3zP6v0R/souvenir-bautismo-anotador.jpg',
    stock: 300,
    description:'Anotador Personalizado "mi Bautismo" .Tapas laminadas con 80 hojas lisas e iman posterior, para pegar en la heladera y tenerlo siempre a mano, se requieren 15 dias desde la compra para el armado'
},
{ id: '2', name: 'Souvenir Bautismo - Tarjeton y Pin', price: 390, category: 'souvenirs', img:'https://i.ibb.co/wQzsTDk/souvenir-bautismo-pin-tarjeton.jpg', stock: 400, description:'Souvenir con tarjeton de base, chapita redonda de bautismo con iman. Para atesorar siempre. Se requiere 15 dias desde el momento de la compra para armado'},
{ id: '3', name: 'Bandeja FRIDA', price: 8800, category: 'bandejas', img:'https://i.ibb.co/KGhc3yQ/bandeja-frida.jpg', stock: 10, description:'Bandeja FRIDA, personalizada con hasta 10 fotografias blanco y negro, laminada para mayor proteccion. Inlcluye tarjeton Frida, taza a juego,azucar con forma de corazon aromatizada, y pack de sobres  de infusiones. Se requiere 10 dias para el armado'},
{ id: '4', name: 'Bandeja Bienvenida Bebe', price: 8800, category: 'bandejas', img:'https://i.ibb.co/TBmxbqQ/bandeja-bienvenida-bebe.jpg', stock: 10, description:'Bandeja Bienvenida Bebe", personalizada con hasta 10 fotografias, laminada para mayor proteccion. Incluye 2 tazas con el nombre de los papas, azucar aromatizada con forma de corazon, pack de sobres con infusiones y caja con regalo sorpresa para la bebe ( puede ser un babero, un par de escarpines , o un muñequito de apego. SIN ELECCION)  '},
{ id: '5', name: 'Bolsa-Alfombra 2 en 1', price: 8900, category: 'juguetes', img:'https://i.ibb.co/QDnJcgK/bolsa-alfombra-2-en-1.jpg', stock: 2, description:'Bolsa-alfombra "carrera de autitos". Cerada contiene juguetes, una vez extendida sirve como alfombron de juego.No incluye autitos'},
{ id: '6', name: 'Perro-Almohada', price: 5990, category: 'juguetes', img:'https://i.ibb.co/k2g3Zbb/perro-almohada.jpg', stock: 3, description:'Perro-Almohadon muy mullido. Sirve para ayudar a una lactancia comoda . Muy decorativo en cuartos de niños mayores.'},
{ id: '7', name: 'Escencia con hornito', price: 2300, category: 'perfumes', img:'https://i.ibb.co/3Sdwccr/horno-con-escencia.jpg', stock: 25, description:'Escencias elegidas de La Pasionaria, fondo de cardamomo y vainilla . Exquisita.'},
{ id: '8', name: 'Atomizador', price: 1700, category: 'perfumes', img:'https://i.ibb.co/Z8Z4nQz/atomizador.jpg', stock: 8, description:'Atomizador de La Pasionaria, fondo floral y entalcado . Armonizante de ambientes.'},
{ id: '9', name: 'Carteles' , price: 590, category: 'papeleria', img:'https://i.ibb.co/YDt2zXC/cartel-evento.jpg', stock: 10, description:'Cartel tamaño A3+, impreso en ilustracion brillo de 300gs y a juego con la tematica del evento. Para colgar en la puerta del sanatorio o decorando la puerta del dormitorio o evento.'},
{ id: '10', name:'Tarjetas de invitacion con CHAPITA PIN', price: 250 , category: 'papeleria para eventos', img:'https://i.ibb.co/gzJSw1V/tarjetas-invitacion-con-chapita-pin.jpg', stock: 100, description: 'Invitacion Super Heroe , impresa en ilustracion brillo de 300 gs. Incluye chapita pin personalizada, para colocar en ropa o en mochilas de cada invitado.'},
{ id: '11', name:'Calendario con Iman', price: 380, category: 'papeleria', img:'https://i.ibb.co/9VCyvsB/calendario-con-iman.jpg', stock: 100, description:'Calendario con notas al pie e iman chapita personalizada.'},
{ id: '12', name: 'Nido contendor', price: 8500, category: 'juguetes', img:'https://i.ibb.co/ZGXZLYY/nido-contenedor.jpg', stock: 8, description:'Nido contenedor con colchon de base reversible'},
{ id: '13', name: 'Lampara Buho', price: 7000, category: 'lamparas', img:'https://i.ibb.co/Lpydh1m/Lampara-Buho-S.png', stock: 8, description:'Lampara de luz tenue para dormitorio, ideal para mantener encendida toda la noche.'},
{ id: '14', name: 'Lampara Avion', price: 7000, category: 'lamparas', img:'https://i.ibb.co/jWM3p5J/Lampara-Avion-S.png', stock: 8, description:'Lampara de luz tenue para dormitorio, ideal para mantener encendida toda la noche.'}
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

//funcion que devuelve el producto para itemDetailContainer
export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

//funcion que filtra por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

//funcion que filtra por id
// export const getProductById = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === id))
//     }, 500);   
//     })
// }