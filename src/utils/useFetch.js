import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setData] = useState([]);
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
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }, 2000);
  }, [url]);

  return { datas, error, isLoading };
};

export default UseFetch;
