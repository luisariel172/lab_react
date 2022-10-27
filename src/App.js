import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//con BrowserRouter le indico cuales son todos los componentes que van a ineractuar, al momento de navegar
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Animation from './components/Animation/Animation';

function App() {
  // const [page, setPage] = useState ('list')

  return (
    <div className="App">
    <ItemDetailContainer />

    {/* <Animation /> */}
      {/* <MercadoLibre /> */}
      {/* <div>
        <button onClick={()=> setPage('list')}>Listado</button>
        <button onClick={()=> setPage('detail')}>Detalle</button>
      </div>
      {page === 'list' && <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>}
      {page === 'detail' && <ItemDetailContainer />} */}
      {/* <BrowserRouter>
        <Navbar /> */}
        {/* <div>
          <Link to='/'>Listado</Link>
          <Link to='/detail'>Detalle</Link>
        </div> */}
        {/* <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/> */}
          {/*con : indico que hay un valor dinamico, que no va a ser siempre el mismo*/}
          {/* <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
 