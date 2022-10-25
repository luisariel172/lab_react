import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      <MercadoLibre />

      {/* <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/> */}
    </div>
  );
}

export default App;
