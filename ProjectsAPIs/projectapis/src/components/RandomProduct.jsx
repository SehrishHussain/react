import {React, useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectedProduct } from "./features/product/productSlice";

 function RandomProduct(){
   // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

   useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches")
            const productArray = response.data.data.data;
            console.log("Product Array: ", productArray);
            
        
                if (productArray.length > 0) {
                    dispatch(setProducts(productArray));
                } else {
                    setProducts('No Product found');
                }
        } catch (error) {
            console.log('Error in fetching Products', error);
            
            
        }
        
    }
    fetchProducts();

   }, [dispatch]);

   const handleProductClick = (product) => {
    dispatch(selectedProduct(product));

   }

   return(
    <>
    <Header/>
    <h1 className="text-3xl font-bold text-center my-6 text-gray-800">Products</h1>
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}
        onClick={() => handleProductClick(product)}
        >
          <div
            key={product.id}
            className="bg-gray-200 bg-opacity-50 p-6 rounded-lg shadow-md border border-gray-300"
          >
        
            
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {product.category ? product.category : 'Miscellaneous' }
            </h2>
            <img
              src={product.images[0]} // Replace this with the appropriate image URL property
              alt={product.title}
              className="w-full h-auto rounded-md"
            />
            <p className="text-gray-800">{product.title}</p>
          </div>
          </Link>
        ))}

</div>

    </>
   )

}
export default RandomProduct;