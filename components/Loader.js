import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Loader() {
  // note: all these are statuses
  const posts = useSelector((state) => state.posts.status) === "loading";
  const auth = useSelector((state) => state.auth.status) === "loading";

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive((_prev) => posts || auth);
  }, [posts, auth]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={active}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
