import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>POKE/API</h1>
            </div>
            <div className="nav-link">
                <Link to="/">POKEMONS</Link>
                <Link to="/favorites">FAVORIS</Link>
            </div>
        </div>
    );
}

export default Navbar;