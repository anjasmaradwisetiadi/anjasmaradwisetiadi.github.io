var firebaseConfig = {
    apiKey: "AIzaSyCZuIuLIrLpRIHF8EqDymmIv3knx0USMVk",
    authDomain: "angular-guidance.firebaseapp.com",
    databaseURL: "https://angular-guidance.firebaseio.com",
    storageBucket: "angular-guidance.appspot.com"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
