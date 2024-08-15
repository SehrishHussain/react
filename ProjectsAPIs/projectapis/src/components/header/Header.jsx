import React from "react";
import {Link, NavLink} from 'react-router-dom'


export default function Header() {
    return (
        <>
        <header className="shadow sticky z-50 top-0 bg-black bg-opacity-5 text-black p-4 m-4 rounded-md text-center">
  Implementation of&nbsp; 
    <a 
    href="https://freeapi.app/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-700"
   > 
    free public APIs
  </a>
</header>
        
        <header className="shadow sticky z-50 top-0 bg-black bg-opacity-5 text-white p-4 m-4 rounded-md ">
                
                <nav>
                <ul className="flex space-x-4">
                    <li>
             <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-gray-700"}
                                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                </li>
                <li>
                <NavLink
                                to="/randomjokes"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Random Jokes
                                </NavLink>
                </li>

                <li>
                <NavLink
                                to="/randomproducts"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Random Products
                                </NavLink>
                </li>
            </ul>
        </nav>
        </header>
        </>
    )
}