import { useState } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  const [ userName ] = useState('Federico');

  return (
    <div className="App-container">
      <Main userName={userName} />
    </div>
  );
}

export default App;
