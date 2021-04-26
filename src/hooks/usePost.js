import { useEffect, useState } from "react";
import axios from "axios";

const usePost = (url, body) => {

    useEffect(() => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
              Authorization:
                `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NDI0NTAzLCJleHAiOjE2MTk0MjgxMDMsIm5iZiI6MTYxOTQyNDUwMywianRpIjoiSGdtQzJmV3g4T3I4TVNaSCIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IhS2IX_g8uqXKuke36gy2ylEE9bdbXFooeaGWxFonDo`,
            },
          };

          axios.post(url, body , requestOptions)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }, [url, body]);

}

export default usePost;