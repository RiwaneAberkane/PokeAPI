import { Link } from 'react-router-dom'
import pokeball from '../img/pokeball.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar-left'>
                <h1>POKEAPI</h1>
                <img className='pokeBall' src={pokeball} alt="" />
            </div>
            <div className="nav-link">
                <Link to="/">POKEMONS</Link>
                <Link to="/favorites">FAVORIS</Link>
            </div>
        </div>
    );
}

export default Navbar;