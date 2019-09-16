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
            if(!userAuth) return;  // if userAuth does not exist, return nothing

            const userRef = firestore.doc(`users/${userAuth.uid}`);//this give u the signed in users uid from Authentication section of firebase

            const snapshot = await userRef.get();

            //console.log(snapshot); //exist: if there is data available

            /* Note: the snapshot represents the data, but the UserRef is used to
            create,read, update & delete:  check video 12 - storing data in firebase */

            if(!snapshot.exists){
              //if user does not Exist create new user from the userAuth object
              const {displayName, email} = userAuth;
              const createdAt = new Date();

              //set the following values to the new user object
              try {
                await userRef.set(
                  {displayName, email, createdAt, ...additionalData}) //additionalData meaning any other data u will want to use
              }
              catch(error){
                console.log('Error creating user',error.message)
              }

              return userRef; //this function returns the userRef so it can be used in other parts of the code
            }


   }



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Set google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}); //trigger google popup with using authentication

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



