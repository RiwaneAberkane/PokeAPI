import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>POKEAPI</h1>
            </div>
            <div className="nav-link">
                <Link to="/">Pokemons</Link>
                <Link to="/favorites">Mes favoris</Link>
            </div>
        </div>
    );
}

export default Navbar;