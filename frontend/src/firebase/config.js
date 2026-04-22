import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqq8PWLcZ859T3WHrrp702eKFCVinklDk",
  authDomain: "rightclick-backend.firebaseapp.com",
  projectId: "rightclick-backend",
  storageBucket: "rightclick-backend.firebasestorage.app",
  messagingSenderId: "857990635596",
  appId: "1:857990635596:web:a8d40c5a6a192aae2654e9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
