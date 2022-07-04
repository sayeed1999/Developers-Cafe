import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const ENDPOINT = process.env.NEXT_APP_API_URL;
const socket = io(ENDPOINT);

const Room = ({ room }) => {
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const name = currentUser?.username;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (name && room) {
      socket.emit("join", { name, room }, (error) => {
        if (error) alert(error);
      });

      return () => {
        socket.emit("leave", { room });
        socket.off();
      };
    }
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    const message = "This is a dummy message!";
    socket.emit("sendMessage", message, (error) => {
      if (error) alert(error);
    });
  };

  const roomHeader = (
    <>
      <strong style={{ textDecoration: "underline" }}>#{room}</strong>
    </>
  );

  const messagesList = messages.map((message, i) => (
    <div key={i}>
      {message.user}: {message.text}
    </div>
  ));

  return (
    <div>
      {roomHeader}
      {messagesList}
    </div>
  );
};

export default Room;
