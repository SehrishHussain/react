import { React } from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";

function ProductDetail() {
    const selectedProduct = useSelector((state) => state.product.selectedProduct)

    if (!selectedProduct) {
        return <p>Product Not Found!</p>
    } 

    return (
        <>
         <Header/>
         <div className="max-w-2xl mx-auto my-10">
            <h1  className="text-3xl font-bold text-gray-800">{selectedProduct.title}</h1>
            <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.title}
            className="w-full h-auto rounded-md mt-6"
            />
         <p className="text-gray-800 mt-4">Category: {selectedProduct.category}</p>
        <p className="text-gray-800 mt-2">Price: ${selectedProduct.price}</p>
        <p className="text-gray-600 mt-2">{selectedProduct.description}</p>

         </div>
        
        
        </>
    );


}
export default ProductDetail
