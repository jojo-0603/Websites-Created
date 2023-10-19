import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,creatUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDbsIY_Q5SYxQnJHWiJXgkEmJDsh88ppms",
    authDomain: "sortvisualizer-92ecd.firebaseapp.com",
    projectId: "sortvisualizer-92ecd",
    storageBucket: "sortvisualizer-92ecd.appspot.com",
    messagingSenderId: "958336626950",
    appId: "1:958336626950:web:0a6f6b82e7dfc159022e87",
    measurementId: "G-V09ZZVZ397"
  };

  var x=document.getElementById("log")
  var y=document.getElementById("reg")
  var z=document.getElementById("btn")
  var or=document.getElementById("using")
 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getDatabase();
  const auth =getAuth(app);



let reg_user = evt=>{
    let fname=document.getElementById('fname_reg');
    let email=document.getElementById('email_reg');
    let passwd=document.getElementById('password_reg');
    evt.preventDefault();
    creatUserWithEmailAndPassword(auth,email.value,passwd.value)
    .then((Credential)=>{
console.log(Credential)
    })
    .catch((err)=>{
        alert(err.message);
        console.log(err.code)
    })
}
y.addEventListener('submit',reg_user)