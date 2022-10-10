import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVxtvNgqQ5zhZzJHLGi12IF2aGxDJBOh0",
  authDomain: "crud-app-8a2e7.firebaseapp.com",
  projectId: "crud-app-8a2e7",
  storageBucket: "crud-app-8a2e7.appspot.com",
  messagingSenderId: "202727458459",
  appId: "1:202727458459:web:209d6713be77edcc99a83e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);