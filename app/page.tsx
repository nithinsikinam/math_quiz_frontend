import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
<div className="flex flex-col min-h-screen bg-gray-100">
  <header className="w-full py-4 px-10 bg-white flex items-center justify-between shadow-md">
    <div className="flex items-center space-x-3">
      <div className="bg-indigo-500 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Math Quiz Game</h1>
    </div>
    <span className="text-sm text-gray-600">Learning through Play</span>
  </header>

  <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Enter the Realm of Numbers</h2>
      
      <div className="space-y-6">
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Enter Room ID" className="p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
          <button className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-200 ease-in-out">Join Room</button>
        </div>

        <Link href="/createRoom">
              <button className="block w-full mt-2">
                <div className="py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-200 ease-in-out text-center">
                  Create New Room
                </div>
              </button>
            </Link>
      </div>
    </div>
  </main>

  <footer className="w-full py-4 px-10 text-center text-sm bg-white shadow-inner">
    © 2023 Math Quiz Game
  </footer>
</div>




  )
}
