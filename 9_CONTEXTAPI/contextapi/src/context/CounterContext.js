// 1 - criar contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - criarprovider

export const CounterContextProvider = ({children}) => {

    const[counter, setCounter] = useState(0);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}