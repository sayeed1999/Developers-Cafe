import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { createRef, useState } from "react";
import Room from "../../components/modules/chatroom/Room";
import AppRoutes from "../../constants/AppRoutes";
import styles from "../../styles/Chatroom.module.scss";

const Chatroom = () => {
  const router = useRouter();
  const rooms = ["help", "general", "fun"];
  const [room, setRoom] = useState(rooms[0]);
  const roomlistRef = createRef();

  const toggleMenu = () => {
    // toggle menu position from -150 to 0 and back
    if (roomlistRef.current.style.top !== "-150px") {
      roomlistRef.current.style.top = "-150px";
    } else {
      roomlistRef.current.style.top = "50px";
    }
  };

  const roomlist = (
    <>
      {rooms.map((r, index) => (
        <div
          key={index}
          className={styles.roomlistitem}
          onClick={() => {
            router.push(`${AppRoutes.Chatroom}#${r}`);
            toggleMenu();
          }}
        >
          #{r}
        </div>
      ))}
      <div className="text-center d-md-none">
        <IconButton color="inherit" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );

  return (
    <div className={`${styles.chatroom} row`}>
      <div ref={roomlistRef} className={`${styles.roomlist} col-md-3`}>
        {roomlist}
      </div>
      <div className={`${styles.room} col-md-9`}>
        <Room />
      </div>
    </div>
  );
};

export default Chatroom;
