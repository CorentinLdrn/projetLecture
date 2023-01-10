// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCllr9QW8DlTPwQ-ceKvvTf9Acuh4bahGI',
  authDomain: 'read-it-1feec.firebaseapp.com',
  projectId: 'read-it-1feec',
  storageBucket: 'read-it-1feec.appspot.com',
  messagingSenderId: '353918361404',
  appId: '1:353918361404:web:e8a6bd26856557d8e34839',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const mail = result.user.email;
      const profilePic = result.user.photoURL;
      const userId = result.user.uid;
      localStorage.setItem('name', name);
      localStorage.setItem('mail', mail);
      localStorage.setItem('profilePic', profilePic);
      localStorage.setItem('userId', userId);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
