import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //const [authToken, setAuth] = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    useEffect(() => {
        // const fetchData = async () => {
        //     console.log(loading);
        //     const requestOptions = {
        //         mode: "no-cors",
        //         headers: {
        //             Authorization:
        //                 `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjIzMTM3MDg1LCJleHAiOjE2MjMxNDA2ODUsIm5iZiI6MTYyMzEzNzA4NSwianRpIjoieVdDSHhNa21aM2lGTjllYSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.PaFiPVoqegMrJEVI0qp6pu3QMpaMxv8wdsT-Z38vtf8`,
        //         },
        //     };
        //     try {
        //         const response = await axios.get(url, requestOptions);
        //         setData(response);
        //         console.log(response);
        //     } catch (e) {
        //         console.log(e)
        //     } finally {
        //         console.log('fetch complete');
        //         setLoading(false);
        //         console.log(loading);
        //     }
        //     console.log(loading);
        // };
        // fetchData();

        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI1NzEwNTYyLCJleHAiOjE2MjU3MTQxNjIsIm5iZiI6MTYyNTcxMDU2MiwianRpIjoiVkNoWWp0QWI3cGhTRUV0QSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.LC0_TQQPUQnGhI6fwdkr4La-zdILwcJuSiD22VjfpJg`,
            },
        };

        axios.get(url, requestOptions)
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [url])

    return [data, loading];
}

export default useFetch;