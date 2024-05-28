import React from "react";

const UserContext = React.createContext() //CONEXT create ho gaya, its a method.. just like useState is a method

export default UserContext;  // sent it in export. of variable which is a method 


// context provides a variable!!!

// every context is a provider.. Usercontext is also a provider

// we will use a Wrapper <> </>
// we will wrap all the components into our UserContext like:
// <UserContext>
// <Login/>
// <Card/>
// </UserContext>
// Now this wrapper becomes a PROVIDER! i.e all these components inside UserContext will get access of global UserContext (global UserContext is like a global variable).
// Next step is to make a Provider.