import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./initFirebaseApp";
const auth = getAuth(app);

export const signupUser = (user) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve({ msg: "user is registered", user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({ errorCode, errorMessage });
      });
  });
};

export const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode, errorMessage);
      });
  });
};
