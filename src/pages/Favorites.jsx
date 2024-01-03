import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, [favorites]);

    return (
        <div>
            {favorites.length > 0 ? (
                <div className="favorite-list">
                    <div>
                        <PokemonCard datas={favorites} title={"FAVORIS"} />
                    </div>
                </div>
            ) : (
                <p className='noFavorites'>Aucun favoris.</p>
            )}
        </div>
    );
};

export default Favorites;
