import { Link } from 'react-router-dom'

const PokemonCard = ({ datas, title }) => {
    return (
        <div className="pokemonCard">
            <h2>{title}</h2>
            <div className="pokemon-list">
                {datas.map((pokemon) => (
                    <div className="pokemon" key={pokemon.key}>
                        <Link to={`/details/${pokemon.name}`}>
                            <button >{pokemon.name}</button>
                        </Link>

                    </div>
                ))}

            </div>
        </div >);
}

export default PokemonCard;