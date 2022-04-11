import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';

const App = () => {
  const [ userName ] = useState('Alex');
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://diplomatura-backend-module.herokuapp.com/api/products')
      .then(response => response.json())
      .then(data => {
        const completedData = data.map(prod => {
          if (!prod.imageUrl) {
            prod.imageUrl = 'https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png'
          };
          return prod;
        });
        setProducts(completedData);
      })
  }, []);

  return (
    <div className="App-container">
      <Main userName={userName} products={products} />
    </div>
  );
};

export default App;
