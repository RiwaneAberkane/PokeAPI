import PokemonCard from "../components/PokemonCard";
import UseFetch from "../utils/useFetch";


const Home = () => {

    const { datas: pokemon, isLoading } = UseFetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    return (
        <div className="home">
            {isLoading && <div className="isLoading"></div>}
            {pokemon && !isLoading && <PokemonCard datas={pokemon} title={"LISTE DES POKEMON"} />}
        </div>
    );
}

export default Home;