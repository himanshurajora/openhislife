// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var app : FirebaseApp | undefined = undefined
// Your web app's Firebase configuration
const firebaseConfig : FirebaseOptions = {
  apiKey: "AIzaSyASrXr2bkg5qcsuvoI-8SSBZhF73U-4EdQ",
  authDomain: "openhislife.firebaseapp.com",
  projectId: "openhislife",
  storageBucket: "openhislife.appspot.com",
  messagingSenderId: "750657914139",
  appId: "1:750657914139:web:7c1cfd743d1cb8c846bfbe"
};

// Initialize Firebase
if(getApps().length > 0){
    app = getApp()
}else{
    initializeApp(firebaseConfig)
}

export default app