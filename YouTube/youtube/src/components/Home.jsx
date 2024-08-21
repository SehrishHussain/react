import {React, useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios';

export default function Home() {
  const [channel, setChannel] = useState('');

  const fetchChannel = async () => {
    try {
      const  response = await axios.get('http://localhost:8080/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest');
// const response = await axios.get('http://localhost:8080/api/v1/public/randomjokes/joke/random') 
     console.log(response);
      
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

      
    </>
  )
}
