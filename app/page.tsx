"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSocketConnection } from '@/utils/socketConnection';
import toast, { Toaster } from 'react-hot-toast';
import InputField from '@/components/InputField';
import RoomActionButton from '@/components/RoomActionButton';


export default function Home() {
  const router = useRouter();
  const { socket } = useSocketConnection();
  const [username, setUsername] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');

  const showToast = (message: string) => {
    toast(message, { icon: '⚠️' });
  };

  const handleCreateRoomSubmit = () => {
    if (!username) {
      showToast('Enter a Username');
      return;
    }
    router.push(`/createRoom/${username}`);
  };

  const handleRoomIdSubmit = () => {
    if (!username) {
      showToast('Enter a Username');
      return;
    }
    if (!roomId) {
      showToast('Enter a RoomId');
      return;
    }
    if (socket) {
      socket.emit('join-room', roomId, username);
    } else {
      toast.error('Error! Try again');
    }
  };

  return (
    <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
      <Toaster />
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Enter the Realm of Numbers</h2>
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <InputField value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Enter Room ID" borderColor="indigo" />
            <InputField value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Name" borderColor="red" />
            <RoomActionButton onClick={handleRoomIdSubmit} text="Join Room" color="indigo" />
          </div>
          <RoomActionButton onClick={handleCreateRoomSubmit} text="Create New Room" color="green" />
        </div>
      </div>
    </main>
  );
}
