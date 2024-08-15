import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        // Make a GET request to the public joke API
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        // Set the fetched joke in the state
        setJoke(`${response.data.setup} - ${response.data.punchline}`);
      } catch (error) {
        console.error('Error fetching the joke:', error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Joke</h1>
      {joke ? <p>{joke}</p> : <p>Loading...</p>}
      <button onClick={() => window.location.reload()}>Get Another Joke</button>
    </div>
  );
}

export default App;
