import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setData] = useState([]);
  const [datasDetails, setDataDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results);
          setData(data.results);
          setDataDetails(data);
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }, 1000);
  }, [url]);
  
  return { datas, datasDetails, error, isLoading };
};

export default UseFetch;

// import { useState, useEffect } from "react";

// const UseFetch = (url) => {
//   const [datas, setDatas] = useState([]);
//   const [datasDetails, setDataDetails] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setDatas(data.results);
//         setDataDetails(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { datas, datasDetails, error, isLoading };
// };

// export default UseFetch;
