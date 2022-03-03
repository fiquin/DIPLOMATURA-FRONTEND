import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';

const App = () => {
  const [ userName ] = useState('Alex');
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(prod => prod.imageUrl)
        setProducts(filteredData)
      })
  }, []);

  return (
    <div className="App-container">
      <Main userName={userName} products={products} />
    </div>
  );
}

export default App;
