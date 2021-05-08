import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAQfnaATU7PvPvgi2x6uB_qynZ8lpgIuTo",
  authDomain: "blog-project-8838e.firebaseapp.com",
  projectId: "blog-project-8838e",
  storageBucket: "blog-project-8838e.appspot.com",
  messagingSenderId: "160773772315",
  appId: "1:160773772315:web:46b25f11e87774c64614be",
};

// ინიციალიზაცია firebase - ის
firebase.initializeApp(firebaseConfig);
// მოგვაქვს firebase - ის პროდუქტი -> firestore
const firestore = firebase.firestore();

export { firestore };
