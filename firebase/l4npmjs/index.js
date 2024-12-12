// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection } from "firebase/firestore";
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
//console.log(app);

const db = getFirestore(app);
//console.log(db);

//   addDoc(collection(db,"users"),{
//  name:"aung aung",
//   city:"Bago",
//   age:40
// });

//=>display auto generated id ! after data set

addDoc(collection(db,"users"),{
   name:"aung aung",
    city:"Bago",
    age:40
  }).then(docRef=>{
    console.log(docRef.id);
  }).catch(error=>{
    console.log(error);
  });





//https://firebase.google.com/ > Docs > Overview >Firebase fundamental > Web icon > abaliable Firebase for Web > Colud Firestore for Web

// Error for writting (PERMISION DENIED)

//Rules -> allow read , write :if true; > Published

addDoc(collection(db,"users"),{
  name:"yu ya",
   city:"Yangon",
   age:40
 }).then(docRef=>{
   console.log(docRef.id);
 }).catch(error=>{
   console.log(error);
 });

