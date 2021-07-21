import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Auth";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const authToken = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  //const [authToken, setAuth] = useContext(AuthContext);   
  //"https://learning.anshor.co/api/topic"

  useEffect(() => {
    const fetchData = async () => {
      console.log(loading);
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer ${authToken[0]}`,
        },
      };
      try {
        const response = await axios.get(url, requestOptions);
        setData(response);
        console.log(response);
      } catch (e) {
        console.log(e)
      } finally {
        console.log('fetch complete');
        setLoading(false);
        console.log(loading);
      }
      console.log(loading);
    };
    fetchData();
  }, [url, authToken, loading])
  return [data, loading];
}

export default useFetch;