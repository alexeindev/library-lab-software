import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQ9SAh5ycy-SRIJay9XabC93WF9stPb78",
  authDomain: "libreria-react-abd61.firebaseapp.com",
  projectId: "libreria-react-abd61",
  storageBucket: "libreria-react-abd61.appspot.com",
  messagingSenderId: "1089369983017",
  appId: "1:1089369983017:web:d73f4eed19cbc97f3d3438",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const db = fb.firestore();
export const storage = fb.storage();
