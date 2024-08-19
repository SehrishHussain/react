import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import { useSelector } from "react-redux";

function ProductDetail() {
  const selectedProduct = useSelector((state) => state.product.selectedProduct )
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.freeapi.app/api/v1/public/randomproducts?id=${id}`);
        const productData = response.data.data.data;
        setProduct(productData);
      } catch (error) {
        console.log('Error in fetching Product', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto my-10">
        {console.log("product:: ", product)
        }
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p>{product[0].category}</p>
        <p>{product[0].title}</p>
        <img
          src={product.description}
          alt={product.title}
          className="w-full h-auto rounded-md mt-6"
        />
        <p className="text-gray-800 mt-4">Category: {product.category}</p>
        <p className="text-gray-800 mt-2">Price: ${product.price}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    </>
  );
}

export default ProductDetail;
