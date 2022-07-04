import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Chatroom = () => {
  const [name, setName] = useState((Math.random() * 1000).toFixed(5));
  const [room, setRoom] = useState("learnjs");
  const ENDPOINT = process.env.NEXT_APP_API_URL;
  let socket;

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });

    return () => {
      socket.emit("disconnect", (error) => {
        if (error) alert(error);
      });
      socket.off();
    };
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
    });
  });

  const sendMessage = () => {
    const message = { user: "sayeed", text: "asdasd" };
    socket.emit("sendMessage", message, (error) => {
      if (error) alert(error);
    });
  };

  return (
    <div>
      <p>chatroom</p>
      <button onClick={() => sendMessage()}>push message</button>
    </div>
  );
};

export default Chatroom;
