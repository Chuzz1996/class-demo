import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {

  const WHEATHER_URL = 'https://api.coinbase.com/v2/currencies';
  const [todo, setTodo] = useState();

  const featchAPI =  async () => {
    const response = await fetch(WHEATHER_URL);
    const responseData = await response.json();
    setTodo(responseData.data);
  }

  useEffect(()=>{
    featchAPI();
  }, []);

  return (
    <div className="App">
      <div>
      <Header />
      <br />
        
    </div>
    </div>
  );
}

export default App;
