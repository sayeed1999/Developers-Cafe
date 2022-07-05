import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import SingleInputForm from "../../../components/shared/SingleInputForm";
import styles from "../../../styles/Room.module.css";
const ENDPOINT = process.env.NEXT_APP_API_URL;
const socket = io(ENDPOINT);

let dummyMessages = [
  { user: "admin", text: "sayeed, welcome to the chat!" },
  { user: "admin", text: "sayeed has joined the chat" },
  { user: "admin", text: "sayeed has joined the chat" },
  { user: "sayem11", text: "hi there!!!" },
  { user: "sifat12", text: "how are you ................................." },
  { user: "admin", text: "sayeed, welcome to the chat!" },
  { user: "admin", text: "sayeed, welcome to the chat!" },
  { user: "admin", text: "sayeed has joined the chat" },
  { user: "admin", text: "sayeed has joined the chat" },
  { user: "sayem11", text: "hi there!!!" },
  { user: "sifat12", text: "how are you ................................." },
  { user: "sayeed1999", text: "hoorah!!!" },
  { user: "sifat12", text: "how are you ................................." },
  {
    user: "sayeed1999",
    text: "asd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asdasd asd asd asd asd asd asd",
  },
  { user: "admin", text: "sayeed has left the chat" },
];

const Room = ({ room }) => {
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const name = currentUser?.username;
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const bottomRef = createRef();

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

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    return;
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

  const messagesList = messages.map((m, i) => (
    <div
      key={i}
      className={
        m.user === "admin"
          ? styles.bot
          : m.user === "sayeed1999"
          ? styles.self
          : styles.other
      }
    >
      <div className={styles.title}>{m.user}:</div>
      <div className={styles.body}>{m.text}</div>
    </div>
  ));

  const sendMessageBox = (
    <SingleInputForm
      state={newMessage}
      setState={setNewMessage}
      onSubmit={sendMessage}
      placeholder="Type new message here..."
    />
  );

  const componentBottom = <div ref={bottomRef} />;

  return (
    <div className={styles.room}>
      {roomHeader}
      {messagesList}
      {sendMessageBox}
      {componentBottom}
    </div>
  );
};

export default Room;
