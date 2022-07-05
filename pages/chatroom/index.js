import { useRouter } from "next/router";
import { useState } from "react";
import Room from "../../components/modules/chatroom/Room";
import AppRoutes from "../../constants/AppRoutes";
import styles from "../../styles/Chatroom.module.css";

const Chatroom = () => {
  const router = useRouter();
  const rooms = ["help", "general", "fun"];
  const [room, setRoom] = useState(rooms[0]);

  const roomlist = rooms.map((r, index) => (
    <div
      key={index}
      className={styles.roomlistitem}
      onClick={() => router.push(`${AppRoutes.Chatroom}#${r}`)}
    >
      #{r}
    </div>
  ));

  return (
    <div className="row">
      <div className={`${styles.roomlist} col-md-3`}>{roomlist}</div>
      <div className={`${styles.room} col-md-9`}>
        <Room />
      </div>
    </div>
  );
};

export default Chatroom;
