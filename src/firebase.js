import * as firebase from 'firebase';
  
  // Initialize Firebase
  var config = firebase.initializeApp({
    apiKey: "AIzaSyBVdkRVidFc7jty3LmnwI4_0YX7bKQW3c4",
    authDomain: "diary-67213.firebaseapp.com",
    databaseURL: "https://diary-67213.firebaseio.com",
    projectId: "diary-67213",
    storageBucket: "",
    messagingSenderId: "178317574608"
  });

export const database = firebase.database().ref('/notes');
