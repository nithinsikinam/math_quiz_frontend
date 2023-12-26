"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useSocketConnection } from '@/utils/socketConnection';

interface CreateRoomProps {
  params: { username: string };
}

const CreateRoom: React.FC<CreateRoomProps> = ({ params }) => {
  const router = useRouter();
  const { socket } = useSocketConnection();

  useEffect(() => {
   
    const createRoomAndJoin = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/create-room`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { roomId } = await response.json();
        socket?.emit('join-room', roomId, params.username);
        socket?.on('start-game',()=>{
          socket?.emit('start-game', roomId, params.username);
          router.push('/play')
        })
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error while creating a room:', error.message);
        }
      }
    };

    
    if (socket) {
      createRoomAndJoin();
    }
  }, [socket]);

  return (
    <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Your Room is Ready!</h2>
        <p className="text-lg text-gray-600 mb-6">Share this Room ID with your friend:</p>
        
        <div className="bg-indigo-100 rounded-xl p-4 mb-8">
          <span className="text-indigo-500 text-xl font-bold">1234-5678</span>
        </div>

        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          <p className="text-lg text-gray-600 ml-4">Waiting for another player to join...</p>
        </div>
      </div>
    </main>
  );
};

export default CreateRoom;
