import React, { useState, useEffect, createContext } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";


export const UserContext = createContext();

export const UserProvider = props => {
    useEffect(() => {
    fetchUser();
  }, []);


  const match  = useRouteMatch();
  console.log(match);

  const [users, setUsers] = useState({});

  const fetchUser = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.id}`);
    const users = await data.json();
    console.log(users);
    setUsers(users);
  };
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}