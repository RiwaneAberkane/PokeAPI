import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return { datas };
};

export default UseFetch;
