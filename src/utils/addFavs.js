const addFavs = ({ items, i }) => {
  const storedFavorites =
    JSON.parse(localStorage.getItem("PokemonFavorites")) || [];

  const isFavorite = storedFavorites.some((fav) => fav.id === items[i].id);

  if (isFavorite) {
    const updatedFavorites = storedFavorites.filter(
      (fav) => fav.id !== items[i].id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } else {
    const newFavorite = {
      id: items.id,
    };
    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
};

export default addFavs;
