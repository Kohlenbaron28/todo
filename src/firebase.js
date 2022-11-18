import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCh655pMa4n_fOykW9NPgVV_KtBBaRyptQ",
    authDomain: "todo-58885.firebaseapp.com",
    projectId: "todo-58885",
    storageBucket: "todo-58885.appspot.com",
    messagingSenderId: "287188888467",
    appId: "1:287188888467:web:150cc47854d41715445666"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };