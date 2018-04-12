import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA-nFBKY5oAd4p17h0UEd9Ad48ZP_AZqio",
        authDomain: "filedownload-ulysses-alvarez.firebaseapp.com",
        databaseURL: "https://filedownload-ulysses-alvarez.firebaseio.com",
        projectId: "filedownload-ulysses-alvarez",
        storageBucket: "filedownload-ulysses-alvarez.appspot.com",
        messagingSenderId: "595831368824"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
