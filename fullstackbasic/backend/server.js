import express from 'express'
import cors from 'cors';


const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is ready');
} );

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
          id: 1,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 2,
          title: "How does a penguin build its house?",
          content: "Igloos it together!"
        },
        {
          id: 3,
          title: "Why don't programmers like nature?",
          content: "It has too many bugs."
        },
        {
          id: 4,
          title: "Why do cows have hooves instead of feet?",
          content: "Because they lactose."
        },
        {
          id: 5,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        }
      ];
     
      res.send(jokes);
      

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server at http://loaclhost:${port}');
    
});