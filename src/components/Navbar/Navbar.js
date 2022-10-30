import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import LogoNav from '../Logos/Logonav'

const Navbar = () => {

  return (
    <nav className="NavBar" >
      <div className='NavBar'>
        <Link to="/">
          <LogoNav />
        </Link>
      </div>
      <div className="Categories">
        {/* Con NavLink y className (clases en Navbar.css) destacamos con otro color la categoria activa*/}
        <NavLink to='/category/souvenirs' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Souvenirs</NavLink>
        <NavLink to='/category/bandejas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bandejas</NavLink>
        <NavLink to='/category/juguetes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
        <NavLink to='/category/perfumes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perfumes</NavLink>
        <NavLink to='/category/papeleria' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Papeleria para Eventos</NavLink>
        <NavLink to='/category/lamparas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lamparas</NavLink>
      </div>
          <CartWidget />
    </nav>
  )
}

export default Navbar