import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'AC', 'DEL', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '00', '0', '.', '='
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} placeholder="0" readOnly />

        {Array.from({ length: 5 }, (_, rowIndex) => (
          <div key={rowIndex}>
            {buttons.slice(rowIndex * 4, rowIndex * 4 + 4).map((btn, idx) => (
              <button
                key={idx}
                className={`button ${
                  btn === '=' ? 'equalBtn' : 
                  ['AC', 'DEL', '%', '/', '*', '-', '+'].includes(btn) ? 'operator' : ''
                }`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
