import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed'
var config = {
    apiKey: "AIzaSyBXcMCM6RC3wKIaxBY_hF_TrdQAX4TjgPw",
    authDomain: "netflix-clone-f7a16.firebaseapp.com",
    databaseURL: "https://netflix-clone-f7a16.firebaseio.com",
    projectId: "netflix-clone-f7a16",
    storageBucket: "netflix-clone-f7a16.appspot.com",
    messagingSenderId: "172341225953",
    appId: "1:172341225953:web:c05611d696861279ae4aa0"
  };

const firebase = Firebase.initializeApp(config);

export {firebase};