import { React, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const selectedProduct = useSelector((state) => state.product.selectedProduct)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    if (!selectedProduct) {
        return <p>Product Not Found!</p>
    } 

        const handleNextImage = () => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex +1 ) % selectedProduct.images.length
        );

        }
        const handlePrevImage = () => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length
            );
        };

        const handleBackToProducts =() => {
            navigate('/randomproducts');
        }


    return (
        <>
         <Header/>
         <div className="max-w-2xl mx-auto my-10">
            <h1  className="text-3xl font-bold text-gray-800">{selectedProduct.title}</h1>
            <div className="relative mt-6">
            <button
                        onClick={handleBackToProducts}
                        className= "bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform transition-transform duration-200"
                    > Back to Products</button>
                    <div className="relative mt-6">
                    <img
                        src={selectedProduct.images[currentImageIndex]}
                        alt={selectedProduct.title}
                        className="w-full h-auto rounded-md"
                    />
                    </div>
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100 focus:outline-none"
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100 focus:outline-none"
                    >
                        ▶
                    </button>
                </div>
         <p className="text-gray-800 mt-4">Category: {selectedProduct.category}</p>
        <p className="text-gray-800 mt-2">Price: ${selectedProduct.price}</p>
        <p className="text-gray-600 mt-2">{selectedProduct.description}</p>

         </div>
        
        
        </>
    );

    

}
export default ProductDetail
