import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBF_NWMfsYcUf1_SKdHt0Ivlo3U2ixodE4",
    authDomain: "imagegalleryv2.firebaseapp.com",
    databaseURL: "https://imagegalleryv2.firebaseio.com",
    projectId: "imagegalleryv2",
    storageBucket: "imagegalleryv2.appspot.com",
    messagingSenderId: "11687586535",
    appId: "1:11687586535:web:b08f4511b1f0f410055042"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};