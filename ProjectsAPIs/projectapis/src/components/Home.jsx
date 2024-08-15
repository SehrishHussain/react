import React from "react";
"./RandomJokes";
import Header from "./header/Header";
function Home() {

    return (
        <>
       
        <Header/>
        <p  className="shadow sticky z-50 top-0 bg-black bg-opacity-0 text-black p-4 m-4 rounded-md text-center"> This is implementation of free public API.
             For more details <a
             href="https://www.youtube.com/watch?v=KqGze7HCTIA&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=29&pp=iAQB"
             target='_blank'
             className="text-blue-500 hover:text-blue-700">
               click here </a>  and to watch full React tutorial <a
             href="https://www.youtube.com/@chaiaurcode"
             target='_blank'
             className="text-blue-500 hover:text-blue-700">
               click here </a>  </p>
        </>

    );
}

export default Home;