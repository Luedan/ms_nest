import { useEffect, useState } from "react";
import "./App.css";
import { Manager, Socket } from "socket.io-client";

const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");

const sock = manager.socket("/chat");

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [socket, setSocket] = useState<Socket>();
  const connectToServer = () => {
    if (isConnected) {
      socket?.disconnect();
      setIsConnected(false);
    } else {
      const manager = new Manager(
        "http://localhost:3000/socket.io/socket.io.js"
      );
      const sock = manager.socket("/chat");

      setSocket(sock);
      setIsConnected(true);
    }
  };

  useEffect(() => {
    console.log(
      sock.on("client", (data) => {
        console.log(data);
      })
    );
  });

  return (
    <>
      <div className="card">
        <button>{isConnected ? "Desconectar" : "Conectar"}</button>
      </div>
    </>
  );
}

export default App;
