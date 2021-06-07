import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('false');

    //const [authToken, setAuth] = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    useEffect(() => {
        const fetchData = async () => {
            const requestOptions = {
                mode: "no-cors",
                headers: {
                    Authorization:
                        `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjIzMDQ3OTY5LCJleHAiOjE2MjMwNTE1NjksIm5iZiI6MTYyMzA0Nzk2OSwianRpIjoiQzZZaUVndEJnZ1E1T09MQSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.YfT7LE8xf_wRnGpVGudmjfNncOUXmh0gqISMu3ymx6M`,
                },
            };
            try {
                setLoading('true');
                const response = await axios.get(url, requestOptions);
                setData(response);
                //console.log(loading);
            } catch (e) {
                console.log(e)
                setLoading('false');
            }
        };
        fetchData();
        setLoading('false')
    }, [url])

    return [data, loading];
}

export default useFetch;