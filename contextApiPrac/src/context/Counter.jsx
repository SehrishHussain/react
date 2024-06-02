import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {  //Whatever children/components are wrapped in contextProvider in main.jsx
    
    // Now making state: since we have already made Context and contextProvider
    
    const [count, setCount] = useState(0);
    
    return ( //whatever value is passed to counterContext.Provider all the other components gets access to that value
        <CounterContext.Provider value={{ count, setCount, name: "SEHRISH" }}>
            {props.children}
        </CounterContext.Provider>
    )
}

