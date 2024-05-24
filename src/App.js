import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [balance, setBalance] = useState(null);

  const updateBalance = () => {
    fetch('http://127.0.0.1:8080/balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": "200"
      }),
    })
    .then(response => response.json())
    .then(data => {
      setBalance(data);
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
  };

  useEffect(() => {
    updateBalance();

    // Инициализация Telegram Mini Apps
    // window.TelegramWebApp.init();
	
	console.log(window.Telegram.WebApp)
  }, []); // Пустой массив означает, что эффект будет вызван только при монтировании компонента

  return (
    <div className="App">
      <h2>Баланс в рублях</h2>
      <p>{balance} руб.</p>
      <button onClick={updateBalance}>Обновить баланс</button>
    </div>
  );
}

export default App;
