import Link from 'next/link'

export default function Home() {
  return (


  <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Enter the Realm of Numbers</h2>
      
      <div className="space-y-6">

        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Enter Room ID" className="p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
          <input type="text" placeholder="Enter Your Name" className="p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
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






  )
}
