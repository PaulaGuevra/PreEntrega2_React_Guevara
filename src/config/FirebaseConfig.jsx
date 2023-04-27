
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCl3PUhCVUoAVdU_bOo-n320iiS_xSTV9I",
  authDomain: "makeupbay-aad86.firebaseapp.com",
  projectId: "makeupbay-aad86",
  storageBucket: "makeupbay-aad86.appspot.com",
  messagingSenderId: "699651380283",
  appId: "1:699651380283:web:1811a1cc17e436aa08381e",
  measurementId: "G-5NZ2KJGBBH"
};
 
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);



