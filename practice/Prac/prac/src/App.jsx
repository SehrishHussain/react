import React from "react";


function PageContent({products}){
  return (
   <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <SearchBar/>
        <ProductTable products={products}/> </tr>
        </tbody>
    </table> 
  );
}

function ProductRow({product}){
  return(
    <tr>
    <td>{product.name}</td>
    <td>{product.price}</td>
    </tr>
  )
}
function ProductTable({products}){
  let items = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      items.push(<ProductCategoryRow
      category={product.category}
      key={product.category}/>)

    } 
     items.push(
      <ProductRow product={product} key={product.name}/>
    );
    lastCategory = product.category;
    
  });
  return (
    
    <>{items}</>
    
  )
}

function ProductCategoryRow({category}){
  return(
    <tr>
      <th colSpan='2'>{category}</th>
      </tr>
  )
}

function SearchBar(){

  return (
    <form>
      <input type='text' placeholder='Search...'/>
        <label> 
          <input type='checkbox'/> {' '}
          Only Show products in stock
        </label>
    </form>
  )

}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App(){
  console.log("Helooooo");
  return (<PageContent products={PRODUCTS}/> )
}
export default App;