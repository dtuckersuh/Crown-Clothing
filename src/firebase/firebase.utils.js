import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBMT5N2jbclgAah4--QFIf90vaAjp67TZE",

  authDomain: "crwn-clothing-1bf6b.firebaseapp.com",

  projectId: "crwn-clothing-1bf6b",

  storageBucket: "crwn-clothing-1bf6b.appspot.com",

  messagingSenderId: "699211372972",

  appId: "1:699211372972:web:cc8c72b5c870a536138209",

  measurementId: "G-BTD1HWK3G8"

};



initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore() 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Fetch user location in db
  const userRef = doc(db, `users/${userAuth.uid}`)
  // Get user object
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toString;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
}

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    'prompt': 'select_account'
})

export const signInWithGoogle = () => signInWithPopup(auth, provider)