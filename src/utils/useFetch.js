import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setData] = useState([]);
  const [datasDetails, setDataDetails] = useState([]);
  const [imgPokemon, setImgPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.results);
          setImgPokemon(url);
          setDataDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }, 2000);
  }, [url]);

  return { datas, datasDetails, imgPokemon, error, isLoading };
};

export default UseFetch;
