import React from 'react'

 const createRoom = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
  <header className="w-full py-4 px-10 bg-white flex items-center justify-between shadow-md">
    <h1 className="text-2xl font-bold text-gray-800">Math Quiz Game</h1>
  </header>

  <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Your Room is Ready!</h2>
      <p className="text-lg text-gray-600 mb-6">Share this Room ID with your friend:</p>
      
      <div className="bg-indigo-100 rounded-xl p-4 mb-8">
        <span className="text-indigo-500 text-xl font-bold">1234-5678</span> {/* Dynamic Room ID */}
      </div>

      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        <p className="text-lg text-gray-600 ml-4">Waiting for another player to join...</p>
      </div>
    </div>
  </main>

  <footer className="w-full py-4 px-10 text-center text-sm bg-white shadow-inner">
    © 2023 Math Quiz Game
  </footer>
</div>

  )
}

export default createRoom;
