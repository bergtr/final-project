import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    //const [authToken, setAuth] = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    useEffect(() => {
        const fetchData = async () => {
            const requestOptions = {
                mode: "no-cors",
                headers: {
                    Authorization:
                        `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NjM1MzUyLCJleHAiOjE2MTk2Mzg5NTIsIm5iZiI6MTYxOTYzNTM1MiwianRpIjoibzJsN2FoT0FUeEh6aWF3RSIsInN1YiI6MTQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.85W2AgYcJmPRO_9wKHN_pZLbhwxFvmJyrzDHksuI1Eo`,
                },
            };
            const response = await axios.get(url, requestOptions);
            const data = await response.data.data.data;
            setData(data);
        };

        fetchData();

    }, [url])

    return { data }
}
 
export default useFetch;