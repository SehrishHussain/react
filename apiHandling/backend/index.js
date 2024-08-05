import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Item1', price: 10, image: 'https://images.pexels.com/photos/1' },
        { id: 2, name: 'Item2', price: 20, image: 'https://images.pexels.com/photos/2' },
        { id: 3, name: 'Item3', price: 30, image: 'https://images.pexels.com/photos/3' },
        { id: 4, name: 'Item4', price: 40, image: 'https://images.pexels.com/photos/4' },
        { id: 5, name: 'Item5', price: 50, image: 'https://images.pexels.com/photos/5' },
        { id: 6, name: 'Item6', price: 60, image: 'https://images.pexels.com/photos/6' },
        { id: 7, name: 'Item7', price: 70, image: 'https://images.pexels.com/photos/7' },
        { id: 8, name: 'Item8', price: 80, image: 'https://images.pexels.com/photos/8' },
        { id: 9, name: 'Item9', price: 90, image: 'https://images.pexels.com/photos/9' },
        { id: 10, name: 'Item10', price: 100, image: 'https://images.pexels.com/photos/10' }
      ]


      // http://kdkjdhfjdhfkh/products?search=metal
      if (req.query.search) { //req.query.search gives search word that we put and which is present in url too
        const filterProducts = products.filter( product => 
            product.name.includes(req.query.search));
            res.send(filterProducts);
            return;
      }
      
      setTimeout(() => {
        res.send(products);
      }, 3000);

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
