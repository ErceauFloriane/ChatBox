import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTyTzwQeZw96puweND_r0nHfrH8R4fdDY",
  authDomain: "base-chatbox-new.firebaseapp.com",
  databaseURL: "https://base-chatbox-new.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
