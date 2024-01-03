import { Link } from 'react-router-dom'
import pokeball from '../img/pokeball.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>POKE/API</h1>
            </div>
            <div className="nav-link">
                <div className='nav-link-left'>
                    <Link to="/">POKEMONS</Link>
                    <img className='pokeBall' src={pokeball} alt="Logo" />
                </div>
                <Link to="/favorites">FAVORIS</Link>
            </div>
        </div>
    );
}

export default Navbar;