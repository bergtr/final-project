import React, { createContext } from "react";
import useFetch from "../hooks/useFetch"
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = (props) => {

    const { data:posts } = useFetch(`/topic`)

    return (
        <TopicContext.Provider value={[posts]}>
            {props.children}
        </TopicContext.Provider>
    )
}

