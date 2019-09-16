import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('user').doc('aS6sjwIew24mn').collection('cartItems').doc('Ojwj8Hwj24JNw')
or
firebase.doc(user/aS6sjwIew24mn/cartItems/Ojwj8Hwj24JNw)  //Get a single doc
firebase.collection(user/aS6sjwIew24mn/cartItems) //Get collections of data

/*
Meaning
user={
    aS6sjwIew24mn:{
            cartItems:{
                Ojwj8Hwj24JNw
        }
    }
}

*/