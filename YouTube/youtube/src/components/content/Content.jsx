import {React, useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Content()  {
  const {data, status, error} = useSelector((state) => state.channel);

  const navigation = useNavigate();
 // console.log(channelData)
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }
  console.log('data',data.data.data);

  return (
    <div>
      
      
      <h2>Channel Information</h2>
      {data && data.items ? (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Content
