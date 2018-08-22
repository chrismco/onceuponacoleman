 
 const firebase = require("firebase");
 // Required for side-effects
 require("firebase/firestore");
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNRoqC3RIckKgoQ2VSqiK7bMZHndMs8z0",
    authDomain: "once-upon-a-coleman.firebaseapp.com",
    databaseURL: "https://once-upon-a-coleman.firebaseio.com",
    projectId: "once-upon-a-coleman",
    storageBucket: "",
    messagingSenderId: "1032732916384"
};
firebase.initializeApp(config);

var db = firebase.firestore();
db.collection("guestList").add({
    firstName: "Ada",
    lastName: "Lovelace",
    email: "c@c.com",
    plus: 3
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});