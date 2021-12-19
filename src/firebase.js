import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfLbhju9NmOdAiY4WcZKwOkigmKtPSAk",
  authDomain: "hari-ecom-v3.firebaseapp.com",
  projectId: "hari-ecom-v3",
  storageBucket: "hari-ecom-v3.appspot.com",
  messagingSenderId: "24700181599",
  appId: "1:24700181599:web:dac7f3a593eac3322a8fea",
  measurementId: "G-GQ17H5MQJJ"
}

let firebaseApp;

const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getFirestore(firebaseApp, {});

export { db };