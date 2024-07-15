import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQhmALXc43n2Hgy2TVecCIn7YmOAKWSGk",
  authDomain: "otp-sent-becc2.firebaseapp.com",
  projectId: "otp-sent-becc2",
  storageBucket: "otp-sent-becc2.appspot.com",
  messagingSenderId: "642121857781",
  appId: "1:642121857781:web:b0a933812ac4898a6aa3bc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;