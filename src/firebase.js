import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZAXaIklzCA7zUENJvFKBpqi9D-4DtD4",
  authDomain: "iteration-5-a7db5.firebaseapp.com",
  projectId: "iteration-5-a7db5",
  storageBucket: "iteration-5-a7db5.appspot.com",
  messagingSenderId: "679469262055",
  appId: "1:679469262055:web:9529eee8ec171dad5fee42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Example: Adding data
async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      email: "john.doe@example.com",
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
addData();
