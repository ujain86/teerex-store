import React,{useEffect, useState} from 'react';
import Navbar from './Navbar';
import Product from './Product';
import Cart from './Cart';

function App() {

  const [apiData, setApiData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [searchInput, setSearchInput] = useState('');
  const[flag, setFlag] = useState(true);

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
    <div>
      <Navbar cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems} flag={flag} setFlag={setFlag} />
    {flag?
    <div>
      
      <div id='search-input-div'>
        <input id='search-input' placeholder='Search for products...' onChange={handleSearchInput}></input>
      </div>
      
      <div className="App">
      {apiData.filter((val) => {
        if(searchInput == ''){
          return val;
        }
        else if(val.name.toLowerCase().includes(searchInput.toLowerCase())){
          return val;
        }
      })
      .map((product, index) => {
        return <Product product={product} key={index} cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount} />
      })}
      </div>
    </div>:<Cart cartItems={cartItems} setCartItems={setCartItems} />}
    </div>
  );
}

export default App;
