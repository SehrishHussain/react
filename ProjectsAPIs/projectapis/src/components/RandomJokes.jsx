import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header/Header';


function RandomJokes() {
  const [jokes, setJoke] = useState([]);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        // Make the GET request to the public joke API
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1');
        console.log("RESsPONSE: ", response);

        // Access the 'data' array from the response
        const jokesArray = response.data.data.data;
        console.log("jokes array", jokesArray);
        
        if (jokesArray.length > 0) {
          // Set the first joke's content
          setJoke(jokesArray);
        } else {
          setJoke('No jokes found');
        }

      } catch (error) {
        console.error("Error in fetching", error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <>
    <Header/>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-800">Jokes</h1>
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-gray-200 bg-opacity-50 p-6 rounded-lg shadow-md border border-gray-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {joke.categories.length > 0 ? joke.categories : 'Miscellaneous'}
            </h2>
            <p className="text-gray-800">{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  );
  
}

export default RandomJokes;
