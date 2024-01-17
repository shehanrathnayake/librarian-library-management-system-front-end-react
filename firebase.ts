// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCN4e1KGOwKciGruupr-ayEeHe5-5jfmsM",
authDomain: "librarian-9c5fe.firebaseapp.com",
projectId: "librarian-9c5fe",
storageBucket: "librarian-9c5fe.appspot.com",
messagingSenderId: "870754584537",
appId: "1:870754584537:web:d11211194dab4e22b83bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth}