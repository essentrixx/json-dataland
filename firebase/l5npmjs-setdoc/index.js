// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc,doc, collection } from "firebase/firestore";
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

// setDoc(doc(db,"products","myid1001"),{
//   name:"redbull",
//   type:"food",
//   price:2000
// });


//
// setDoc(doc(db,"products","myid1002"),{
//   name:"sponsor",
//   type:"food",
//   price:1000
// }).then((docRef)=>{
//   console.log("Create Successfully");
    // console.log(docRef.id);//error
// }).catch(error=>{
//   console.log(error);
// });


 setDoc(doc(collection(db,"products")),{
    name:"deedo",
    type:"food",
    price:500
  }).then(()=>{
    console.log("Create Successfully");
  }).catch(error=>{
    console.log(error);
  });
