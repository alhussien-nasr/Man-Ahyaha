import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxmjP9jwZxrtVaGdowr4dmMF-btM0i7nQ",
  authDomain: "man-ahyaha-acd7c.firebaseapp.com",
  projectId: "man-ahyaha-acd7c",
  storageBucket: "man-ahyaha-acd7c.appspot.com",
  messagingSenderId: "60267939292",
  appId: "1:60267939292:web:bcf4fb9672bfe98a7fbb19",
};

export const app = initializeApp(firebaseConfig);

export const authantication = getAuth(app);
