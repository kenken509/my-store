import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//******************END OF IMPORTS******************************/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVpGhB9G-uzT02xopnaQ7jgLt4MMavGTk',
  authDomain: 'my-store-db-47620.firebaseapp.com',
  projectId: 'my-store-db-47620',
  storageBucket: 'my-store-db-47620.appspot.com',
  messagingSenderId: '873155446045',
  appId: '1:873155446045:web:2247bba9f8968bfee40df4',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const db = getFirestore();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//this is a function that will take the data coming from googleAuthentication and store to userDocRef variable
export const createUserDocFromAuth = async (
  userAuth,
  addtionalInformation = {}
) => {
  if (!userAuth) return; // if did not receive userauth then return.

  const userDocRef = doc(db, 'users', userAuth.uid); // doc(database, 'name of collections', 'unique identifier or unique id')

  const userSnapShot = await getDoc(userDocRef);

  //console.log(userSnapShot.exists()); // this will return false
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log('creating the user', error);
    }
  }
  return userDocRef;
};
// ive paused here......
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
  // console.log(authUser);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
