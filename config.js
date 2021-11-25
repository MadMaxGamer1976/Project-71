import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC8m64xV5AJA2arXoIFNTG34IGYaeKeBNA",
    authDomain: "project-71-327f9.firebaseapp.com",
    projectId: "project-71-327f9",
    storageBucket: "project-71-327f9.appspot.com",
    messagingSenderId: "847875312925",
    appId: "1:847875312925:web:e8be52cd11136bea6625f4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


