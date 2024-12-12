// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc,doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34Rr7-oWMaWQYKWaRK4MYvJ1LNGUEnp0",
  authDomain: "my-first-project-1b04f.firebaseapp.com",
  projectId: "my-first-project-1b04f",
  storageBucket: "my-first-project-1b04f.firebasestorage.app",
  messagingSenderId: "380973294619",
  appId: "1:380973294619:web:d9b5773f7d8934f465c4be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//console.log(db);

setDoc(doc(db,"products","myid1001"),{
  name:"deedo",
  type:"food",
  price:300
}).then(()=>{
    console.log("Create Successfully");
  }).catch(error=>{
    console.log(error);
  });



  //=>Before Merge


  //=>After Merge


