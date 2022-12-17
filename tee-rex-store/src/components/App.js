import React,{useEffect, useState} from 'react';
import Navbar from './Navbar';
import Product from './Product';

function App() {

  const [apiData, setApiData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    
    const url = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

    const fetchData = async () => {
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log('data: ', parsedData)
      setApiData(parsedData);
    }
    
    fetchData();

  }, []);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  } ;

  
  return (
    <div className="App">
      <Navbar cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />
      <input placeholder='Search for products...' onChange={handleSearchInput}></input>
      {apiData.filter((val) => {
        if(searchInput == ''){
          return val;
        }
        else if(val.name.toLowerCase().includes(searchInput.toLowerCase())){
          return val;
        }
      })
      .map((product, index) => {
        return <Product product={product} key={index} cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />
      })}
    </div>
  );
}

export default App;
