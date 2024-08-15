import { React } from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";

function ProductDetail() {
    const selectedProduct = useSelector((state) => state.product.selectedProduct)

}