import { createContext, useContext } from "react";
import React from "react";

export const ThemeContext = React.createContext({ // we can use default value here // Context jab pheli bar bany usky andr kya kya values already feed hon
// a default object present ho, usky andar a theme mode ho uski value light. Whenever user wants to set theme there must be a
// default varaible usky andr ek theme set ho i.e. light


themeMode: 'light',  //varaible and methods
darkTheme: () => {},  //this is a drak theme fn
lightTheme: () => {},  // this is light theme fn. These both are methods

})

export const ThemeProvider = ThemeContext.Provider  //this is used for wrapper
// Also can use custom hooks here:

export default function useTheme() {  //useTheme is used to access theme varaibles and methonds above
    return useContext(ThemeContext)  // will import useTheme and it will gove access to watever is in "useContext" var and methods
}


/* 
ContextProvider k ander hum variable and method dy ry thy:
const UserCOntextProvider = ({children}) => {
    return (
        <UserContext.Provider value={{user, setUser}}
        .....
    )
}
*/