const PokemonCard = ({ datas, title }) => {
    return (
        <div className="pokemonCard">
            <h1>{title}</h1>
            <div className="pokemon-list">
                {datas.map((pokemon) => (
                    <div className="pokemon" key={pokemon.key}>

                        <button>{pokemon.name}</button>
                    </div>
                ))}

            </div>
        </div>);
}

export default PokemonCard;