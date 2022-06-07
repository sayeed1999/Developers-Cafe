import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import swal from "sweetalert";
import AppMsgs from "../constants/AppMsgs";
import AppRoutes from "../constants/AppRoutes";
import "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const { push } = useRouter();

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
          push(AppRoutes.Home);
          swal("Success", AppMsgs.SignedUp, "success");
        });
      })
      .catch((err) => {
        swal("Error", err.message, "error");
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

/*
firebase currentUser object:-

accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0ZTc2NDk3ZGE3Y2ZhOWNjMDkwZDcwZTIyNDQ2YTc0YjVjNTBhYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoic2F5ZWVkMTk5OSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wcm9ibGVtLXNvbHZlcnMtY2FmZmUiLCJhdWQiOiJwcm9ibGVtLXNvbHZlcnMtY2FmZmUiLCJhdXRoX3RpbWUiOjE2NTQ0MTE3MDQsInVzZXJfaWQiOiJCYklKZTZKb3ZQYnFVZElwOWViM09RVWhNZjEzIiwic3ViIjoiQmJJSmU2Sm92UGJxVWRJcDllYjNPUVVoTWYxMyIsImlhdCI6MTY1NDQxMTcwNCwiZXhwIjoxNjU0NDE1MzA0LCJlbWFpbCI6Im1kc2F5ZWVkcmFobWFuMTk5OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWRzYXllZWRyYWhtYW4xOTk5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.G97LXrv_UhFj1JsRk4IMYkzQRIeB5mQvb72O3vEICEYZBoMkol3-OQ-7qdCq1dTuUKvqimqhlztwXaO1iqeGOoYrZnnVck44J4_XkpP0xs9unEyPquWsKpaov5RSaXapxLYL0_4ebjNDEhZ12UapeulIs-rRT10bV7E4SNrGPmYjAwkxpS43V-0Dj1BUmlAbLkdmwpU2-Zjo697rsWMy3w2XOErfvamRWvxXvO8n68J4DriobSxek0J2HjlCU1lDN1YSUGGapbmlvvUbooQBLYYvis8KTp214_ufiOx0D5FDn8At9QKOXv6hje__-SVhIPJ83miQ3s9AWDK8h9Hfkg"
auth: AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, config: {…}, currentUser: UserImpl, emulatorConfig: null, …}
displayName: "sayeed1999"
email: "mdsayeedrahman1999@gmail.com"
emailVerified: false
isAnonymous: false
metadata: UserMetadata {createdAt: '1654323061564', lastLoginAt: '1654411704522', lastSignInTime: 'Sun, 05 Jun 2022 06:48:24 GMT', creationTime: 'Sat, 04 Jun 2022 06:11:01 GMT'}
phoneNumber: null
photoURL: null
proactiveRefresh: ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
providerData: [{…}]
providerId: "firebase"
reloadListener: null
reloadUserInfo: {localId: 'BbIJe6JovPbqUdIp9eb3OQUhMf13', email: 'mdsayeedrahman1999@gmail.com', displayName: 'sayeed1999', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, …}
stsTokenManager: StsTokenManager {refreshToken: 'AIwUaOn2JXVzqAy40W6KxHTM_yI9fdhnT-MbohYtyLc_deJS89…zyRT6pfwL8V03PRM2udX77aNdBlYLs1EpE4haI5N_w-ENyQxt', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0ZTc2NDk3ZGE3Y2ZhOW…Ox0D5FDn8At9QKOXv6hje__-SVhIPJ83miQ3s9AWDK8h9Hfkg', expirationTime: 1654415305005}
tenantId: null
uid: "BbIJe6JovPbqUdIp9eb3OQUhMf13"
refreshToken: (...)
[[Prototype]]: Object
*/
