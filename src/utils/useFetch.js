import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [datasDetails, setDataDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setDataDetails(data);
        setLoading(false);

        const pokemonDataPromises = data.results.map(async (pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .catch((error) => {
              console.error("Error fetching Pokemon data:", error);
              throw error;
            });
        });

        const pokemonData = await Promise.all(pokemonDataPromises);

        setDatas(pokemonData);
      } catch (error) {
        setError(error);
      }
    };

    setTimeout(fetchData, 2000);
  }, [url]);

  return { datas, datasDetails, error, isLoading };
};

export default UseFetch;
