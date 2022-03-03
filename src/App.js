import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';

const App = () => {
  const [ userName ] = useState('Federico');
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="App-container">
      <Main userName={userName} products={products} />
    </div>
  );
}

export default App;
