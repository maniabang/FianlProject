// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrHxn9EXHPkA-zTN5tctgHnos--n3faTQ",
  authDomain: "react-crud-c7658.firebaseapp.com",
  databaseURL: "https://react-crud-c7658-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-crud-c7658",
  storageBucket: "react-crud-c7658.appspot.com",
  messagingSenderId: "905842962070",
  appId: "1:905842962070:web:58567a4e2c7fb9b9879cb7",
  measurementId: "G-Q91XZ1E5TP"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const database = firebase.database();
const ref = firebase.storage().ref();
export { auth };
export { database };
export {ref};
export {firebaseConfig};

