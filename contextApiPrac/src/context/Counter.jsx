import { createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {  //Whatever children/components are wrapped in contextProvider in main.jsx
    return (
        <CounterContext.Provider>
            {props.children}
        </CounterContext.Provider>
    )
}

