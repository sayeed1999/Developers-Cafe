import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppMsgs from "../constants/AppMsgs";
import AppRoutes from "../constants/AppRoutes";
import "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    // returns unsubscribe method to fix memory leak!
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const signup = (email, password, username) => {
    const auth = getAuth();
    //signup
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // update username
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {
          navigate(AppRoutes.Home);
          alert(AppMsgs.SignedUp);
        });
      })
      .catch((err) => {
        alert(err.message);
      });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };

  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
