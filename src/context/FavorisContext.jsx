import React, { createContext, useContext, useEffect, useState } from "react";

const contextProps = {
    children: React.ReactNode,
};

export const PokemonContext = createContext({}); // Change this line to export the correct context

export const useReactFavorisContext = () => {
    const contextRest = useContext(PokemonContext); // Change this line to use the correct context
    return contextRest;
};

export const ContextPokemon = ({ children }) => {
    const [pokemonFavourites, setFavourites] = useState([]);

    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemonFavourites));
    }, [pokemonFavourites]);

    let seeFavs = JSON.parse(localStorage.getItem('pokemons') || "[]");
    useEffect(() => {
        if (pokemonFavourites) {
            setFavourites(seeFavs);
        }
    }, []);

    const saveToLocalStorages = (items) => {
        const key = localStorage.length.toString();
        localStorage.setItem(key, 'pokemonData' + JSON.stringify(items));
    };

    const addToFavs = (pokemon) => {
        const newFavouriteList = [...pokemonFavourites, pokemon];
        if (pokemonFavourites.includes(pokemon)) {
            return null;
        } else {
            setFavourites(newFavouriteList);
            saveToLocalStorages(newFavouriteList);
        }
    };

    const remove = (pokemon) => {
        const newFavouriteList = pokemonFavourites.filter((favourite) => favourite.id !== pokemon.id);
        setFavourites(newFavouriteList);
    };

    return (
        <PokemonContext.Provider
            value={{
                addToFavs,
                remove,
                pokemonFavourites,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
