const products = [
    {title: 'Cabbage', isFruit: false, id: 1 },
    {title: 'garlic', isFruit: false, id: 2 },
    {title: 'apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const listItems = products.map(product => 
    <li
    key={product.id}
    style={{
        color: product.isFruit? 'red' : 'darkblue'
    }}
    >
        {product.title}
        {console.log(listItems)}
    </li>);
    return (
        <ul>{listItems}</ul>
    );
}