import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5iSp3uAU2t7ItlaovNIq_AVrtxgKMFes",
  authDomain: "article-app-anurag-affection.firebaseapp.com",
  projectId: "article-app-anurag-affection",
  storageBucket: "article-app-anurag-affection.appspot.com",
  messagingSenderId: "675019331695",
  appId: "1:675019331695:web:ab09c0288e4691a9bad59a",
  measurementId: "G-9DBCZMZ6D7",
  databaseURL: "https://article-app-anurag-affection-default-rtdb.firebaseio.com"
};

export const firebaseApp = initializeApp(firebaseConfig);
