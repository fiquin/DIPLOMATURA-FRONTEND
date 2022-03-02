import { useState } from 'react';
import './App.css';
import Main from './components/Main';

const PROD = [
  {
    id: 'prod1',
    name: 'notebook',
    price: 19000
  },
  {
    id: 'prod2',
    name: 'zapatillas',
    price: 3500
  },
  {
    id: 'prod3',
    name: 'juego de ps4',
    price: 5000
  }
];

const App = () => {
  const [ userName ] = useState('Federico');

  return (
    <div className="App-container">
      <Main userName={userName} products={PROD} />
    </div>
  );
}

export default App;
