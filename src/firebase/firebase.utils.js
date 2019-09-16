import firebase from 'firebase/app';
import 'firebase/firestore'; //for database
import 'firebase/auth'; //for authentication

const config = {
    apiKey: "AIzaSyAifvRmBxc-b7HRUECIjjFgqqNhLoUm-CI",
    authDomain: "gymatrixx.firebaseapp.com",
    databaseURL: "https://gymatrixx.firebaseio.com",
    projectId: "gymatrixx",
    storageBucket: "gymatrixx.appspot.com",
    messagingSenderId: "726236010472",
    appId: "1:726236010472:web:78636275ec8be735ac365d"
  };

  // 1. this is an async function because it is calling the firebase api to check if details exist
   export const createUserProfileDocument = async (userAuth, additionalData) =>{
            if(!userAuth) return;  // if userAuth does not exist, return nothin

            const userRef = firestore.doc('user/123ubidh3h2');

            const snapshot = await userRef.get();

            console.log(snapshot); //exist: if there is data available

   }



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Set google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}); //trigger google popup with using authentication

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



