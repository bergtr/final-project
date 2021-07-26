import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = (props) => {
  // useEffect(() => {
  //     getAuth();
  // }, []);

  const [authToken, setAuth] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  //"https://learning.anshor.co/api/topic"

  const getAuth = async (username, password) => {
    const reqBody = {
      username: username,
      password: password,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await axios.post('/login', reqBody)

      console.log(response.data);
      if (response.data.errorCode === '00') {
        const authToken = await response.data.data.token;
        console.log(authToken);
        setAuth(authToken);
        setLoggedIn(true);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (username, password) => {
    const reqBody = {
      username: username,
      password: password
    }
    try {
      const response = await axios.post('/login', reqBody)

      console.log(response.data);
      if (response.data.errorCode === '00') {
        const authToken = await response.data.data.token;
        console.log(authToken);
        setAuth(authToken);
        setLoggedIn(true);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (user, pw) => {
    getAuth(user, pw);
  };

  const logout = () => {
    setLoggedIn(false);
  }

  const signIn = async (email, username, password, display_name) => {
    const reqBody = {
      email: email,
      username: username,
      password: password,
      display_name: display_name,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
    console.log(reqBody);
    try {
      const response = await axios.post('/register', reqBody)
      if (response.data.errorCode === '00') {
        const authToken = await response.data.data.token;
        //console.log(authToken);
        setAuth(authToken);
        setLoggedIn(true);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const authContextValue = {
    authToken,
    loggedIn,
    login,
    logout,
    signIn
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};