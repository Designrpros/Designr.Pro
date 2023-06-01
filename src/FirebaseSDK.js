import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkwMUjJTqD3KBd0t5fyRJB_OhKtPDq7kA",
  authDomain: "designrpro-de0cd.firebaseapp.com",
  projectId: "designrpro-de0cd",
  storageBucket: "designrpro-de0cd.appspot.com",
  messagingSenderId: "267074919200",
  appId: "1:267074919200:web:5ec61ee872830c58095545",
  measurementId: "G-H8SCQR53PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);


// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Log an event to Firebase Analytics
const logFirebaseEvent = (eventName, eventParams) => {
  logEvent(analytics, eventName, eventParams);
};

export { app, auth, db, logFirebaseEvent, storage };
