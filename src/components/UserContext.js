import React, { useState, useEffect, createContext } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";


export const UserContext = createContext();

export const UserProvider = props => {
    useEffect(() => {
    fetchUser();
  }, []);


  const [users, setUsers] = useState({});

  const fetchUser = async () => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    console.log(users);
    setUsers(data);
  };
    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    )
}