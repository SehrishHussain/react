import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

const Item = (props) => {
    const cart = useContext(CartContext)
    console.log("cart", cart)
    return (
        <div className="item-card text-color-pink">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button 
            onClick={ () => 
                cart.setItems([
                    ...cart.items,
                     { name: props.name, price: props.price}])}>Add to Cart</button>
            </div>
    )
}

export default Item;