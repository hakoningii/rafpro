import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBc2FFx6RY5GhWd1GgxWdnJwvJxCA1nIe4",
  authDomain: "rafpro-6c2a0.firebaseapp.com",
  databaseURL: "https://rafpro-6c2a0.firebaseio.com",
  projectId: "rafpro-6c2a0",
  storageBucket: "rafpro-6c2a0.appspot.com",
  messagingSenderId: "314488782323",
  appId: "1:314488782323:web:b5f845aaea43d01aeaa686"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;

