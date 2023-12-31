import PokemonCard from "./PokemonCard";
import UseFetch from "./useFetch";

const Home = () => {
    const { datas: pokemon } = UseFetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    return (
        <div className="home">
            <PokemonCard datas={pokemon} title={"Liste des POKEMON"} />
        </div>
    );
}

export default Home;