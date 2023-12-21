import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import io, { Socket } from 'socket.io-client';

interface ISocketConnection {
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
}

const defaultValue: ISocketConnection = {
  socket: null,
  setSocket: () => {},
};

const SocketConnection = createContext<ISocketConnection>(defaultValue);

export const useSocketConnection = () => useContext(SocketConnection);

interface SocketConnectionProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketConnectionProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    
    const newSocket = io('http://localhost:4000');

    setSocket(newSocket);

    return () => {
     
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketConnection.Provider value={{ socket, setSocket }}>
      {children}
    </SocketConnection.Provider>
  );
};
