import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//con BrowserRouter le indico cuales son todos los componentes que van a ineractuar, al momento de navegar
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

//creacion del contexto
// export const Context = createContext()
// export const CartContext = createContext()


function App() {

  return (
    <div className="App">
      {/* <Context.Provider value={{value1:'1st value to share', value2:'2nd value to share'}}> */}
        {/* <CartContext.Provider value={{addItem, removeItem} }> */}
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A NUESTRA TIENDA ONLINE'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de categoria'/>}/>
              {/*con : indico que hay un valor dinamico, que no va a ser siempre el mismo*/}
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
              {/*Path con *, p/ q todos los links q no figuren, pasen a una simulacion de error 404  */}
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
          </CartContextProvider>
        {/* </CartContext.Provider> */}
      {/* </Context.Provider> */}
    
    </div>
  );
}

export default App;