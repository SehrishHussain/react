import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {



    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#ffeedd] rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
        {featuredImage && (
            <img 
              src={appwriteService.getFileView(featuredImage)} 
              
              alt={title} 
              className='w-full h-48 object-cover rounded-xl' 
            />
            
          )}

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
