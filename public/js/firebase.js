const firebaseConfig = {
        apiKey: "AIzaSyDl4JlwTCuZSVKGU3B5VT6w3XC3Mwuepbo",
        authDomain: "prestige-blog.firebaseapp.com",
        projectId: "prestige-blog",
        storageBucket: "prestige-blog.appspot.com",
        messagingSenderId: "77852718767",
        appId: "1:77852718767:web:4811e93bd617fe3b8f465a"
    
      
      

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();