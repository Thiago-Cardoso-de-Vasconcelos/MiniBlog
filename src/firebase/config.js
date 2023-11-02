import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1NwBdNm_cxzOF-QQ3JzDtD4-ucNSNob4",
  authDomain: "miniblog-221e0.firebaseapp.com",
  projectId: "miniblog-221e0",
  storageBucket: "miniblog-221e0.appspot.com",
  messagingSenderId: "628004850840",
  appId: "1:628004850840:web:dfafe276277804132454ed"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
