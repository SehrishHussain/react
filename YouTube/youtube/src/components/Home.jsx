import {React, useState, useEffect} from 'react'
import Header from './header/Header'
import axios from 'axios';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

export default function Home() {
  const [channel, setChannel] = useState('');

  const fetchChannel = async () => {
    try {
      const  response = await axios.get('http://localhost:8080/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest');
// const response = await axios.get('http://localhost:8080/api/v1/public/randomjokes/joke/random') 
     console.log(response);
     setChannel(response.data.data.data)
      
    } catch (error) {
      console.log( 'error in fetchng: ',error);
      
      
    }

  }
  useEffect(() => {
    fetchChannel();
  }, []);

  return (
    <>
        <Header/>
        <p>This is home</p>
        <div style={{display: 'flex', justifyContent: 'flex-start', gap: '1rem' }}>
        <Sidebar  />
        <Content/>
        </div>

      
    </>
  )
}
