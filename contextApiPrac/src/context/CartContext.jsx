import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

//making our own contextHook

export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}