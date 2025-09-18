// components/PostCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {blogService} from "../services";

export default function PostCard({ $id, title, slug, featuredImage, views }) {
  const imgUrl = featuredImage
    ? blogService.getFileView(featuredImage)
    : "/logo-light.png"; // "https://via.placeholder.com/300x200"

  return (
    <Link
      to={`/post/${slug}`}
      className="
  block border rounded-lg shadow-md p-4 
  bg-white dark:bg-gray-800 
  transform transition-all duration-300 

  hover:scale-105 hover:shadow-xl hover:cursor-pointer
  hover:border-gray-300 dark:hover:border-gray-100 dark:hover:shadow-gray-100/30
"

    >
      {/* Thumbnail */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Views */}
      <p className="text-sm text-gray-500">👁️ {views || 0} views</p>
    </Link>
  );
}
