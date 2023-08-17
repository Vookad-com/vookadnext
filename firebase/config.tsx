import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import store from "@/redux/store";
import { authCheckSlice } from "@/redux/fireAuth";
import {
    getDoc,
    doc,
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
console.debug("Yo");

export const db = getFirestore(firebase_app);
export const auth = getAuth(firebase_app);
export const storage = getStorage(firebase_app);

onAuthStateChanged(auth, async (user) => {
    console.debug("Checking Auth State")
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        try {
          const docref = doc(db, 'users', uid);
          console.log('authenticated')
          const docSnap = await getDoc(docref);
          if(!docSnap.exists()) {
            return;
          }
          store.dispatch(authCheckSlice.actions.load({
              auth: true,
              name: docSnap.data().name,
              email: docSnap.data().email,
              phone: docSnap.data().phone,
              id: docSnap.id,
          }))
        } catch (error) {
          
        }
      // ...
    } else {
      store.dispatch(authCheckSlice.actions.load({
        auth: false,
        name: '',
        email: '',
        phone: '',
        id: '',
      }))
    }
  });