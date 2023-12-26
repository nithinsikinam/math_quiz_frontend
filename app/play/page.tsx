"use client"
import React, { useState, useEffect } from 'react';

export default function GameplayScreen() {
  
    const [timer, setTimer] = useState(30);
 const [input, setInput] = useState('');

 
 const handleKeypadClick = (key:any) => {
   switch (key) {
     case 'C':
       setInput(''); 
       break;
     case '←': 
       setInput(input.slice(0, -1)); 
       break;
     case 'Submit':
       
       console.log('Submitted:', input);
       setInput(''); 
       break;
     default:
       setInput(input + key); 
       break;
   }
 };

   
   useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    
    return () => clearInterval(countdown);
  }, []);

  
  useEffect(() => {
    if (timer === 0) {
      console.log("Time's up!");
    }
  }, [timer]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          
        {/* Scoreboard */}
        <div className="text-center mb-8">
          <div className="text-2xl md:text-3xl font-bold text-indigo-300">
            Player 1: <span className="text-yellow-300">10 Points</span> | 
            Player 2: <span className="text-yellow-300">8 Points</span>
          </div>
        </div>

  
          {/* Question Area */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="bg-indigo-600/90 rounded-lg shadow-lg p-8 mb-6 max-w-2xl w-full">
              <h2 className="text-4xl font-extrabold mb-3">Question:</h2>
              <p className="text-3xl">5 + 3 = ?</p>
            </div>
  
                    {/* Timer Area */}
        <div className="text-center my-4">
          <span className="text-2xl font-bold text-red-500">
            Time Left: {timer} seconds
          </span>
        </div>

      {/* Answer Area */}
      <div className="mb-8">
        <input type="text" value={input} readOnly className="border border-indigo-300 bg-gray-700 p-4 rounded-lg w-full text-center text-xl" placeholder="Type your answer"/>
      </div>
          </div>
  
          {/* Keypad Area */}
          <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
          {[1, 2, 3, 'π', 4, 5, 6, 'e', 7, 8, 9, 'φ', 'C', '←', 0, '.', 'Submit'].map(key => (
            <button key={key} onClick={() => handleKeypadClick(key.toString())} className="bg-indigo-500/90 py-3 rounded-lg font-semibold">
              {key}
            </button>
          ))}
        </div>
        </div>
      </div>
    );
  }
  