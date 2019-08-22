import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp8KZEodMbjT95T0COYVsDKWby7tc8fi0",
  authDomain: "rgb-hero-2.firebaseapp.com",
  databaseURL: "https://rgb-hero-2.firebaseio.com",
  projectId: "rgb-hero-2",
  storageBucket: "",
  messagingSenderId: "587437592810",
  appId: "1:587437592810:web:272e5f7e156d9d6b"
};

firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export default firebase;
