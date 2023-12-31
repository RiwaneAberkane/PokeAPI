import { Link } from 'react-router-dom'

const PokemonCard = ({ datas, title }) => {
    return (
        <div className="pokemonCard">
            <h2>{title}</h2>
            <div className="pokemon-list">
                {datas.map((pokemon, index) => (
                    <div className="pokemon" key={pokemon.index}>
                        <Link to={`/details/${pokemon.name}`}>
                            <div>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="Pokemon" />
                            </div>
                            <button>{pokemon.name}</button>
                        </Link>

                    </div>
                ))}
            </div>
        </div >);
}

export default PokemonCard;