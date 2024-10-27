import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDmSL3pcb4va3-GfxcVF0GjQiAupOQe_A",
  authDomain: "fir-nisa-a3e1f.firebaseapp.com",
  projectId: "fir-nisa-a3e1f",
  storageBucket: "fir-nisa-a3e1f.appspot.com",
  messagingSenderId: "341079497374",
  appId: "1:341079497374:web:41e828587497f92c2f398f"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)

export {app, auth}
