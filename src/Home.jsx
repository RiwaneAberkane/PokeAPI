import PokemonCard from "./PokemonCard";
import UseFetch from "./utils/useFetch";

const Home = () => {
    const { datas: pokemon, isLoading } = UseFetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    return (
        <div className="home">
            {isLoading && <div className="isLoading"></div>}
            {pokemon && !isLoading && <PokemonCard datas={pokemon} title={"Liste des POKEMON"} />}
        </div>
    );
}

export default Home;