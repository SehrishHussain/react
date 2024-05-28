import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => { // this is a method
    /* childern is a generic name. Whatever you get as childern


     like previously said we will wrap them
     we will now return(
     <>   
     {children} // whatever we get a children write here and wrap it.
     </> )  

     Next: 
     <UserContext.Provider>   
     {children} 
     </UserContext.Provider>
     
     
     */



    const [user, setUser] = useState(null);  //this is for data OR API calls. Once we get access here pass it down to Provider

    return(   // we have value property in Provider to provide data. We pass Obj and give watever data we want
        <UserContext.Provider value={{user, setUser}}>  
        {children}      
        </UserContext.Provider>
    )

}

export default UserContextProvider;