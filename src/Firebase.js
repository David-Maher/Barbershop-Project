import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // استيراد الدالة signInWithEmailAndPassword
import { getFirestore } from 'firebase/firestore'; // ✅ ده مهم علشان قاعدة البيانات
const firebaseConfig = {
  apiKey: "AIzaSyD4KbFPgSekfkqaPi4trGlPebxYM7d3OBk",
  authDomain: "saeed-rabee.firebaseapp.com",
  projectId: "saeed-rabee",
  storageBucket: "saeed-rabee.firebasestorage.app",
  messagingSenderId: "450691541344",
  appId: "1:450691541344:web:8149bdda02b26cf37a5605",
  measurementId: "G-PJSTN27CSF",
};

const app = initializeApp(firebaseConfig);

// الحصول على الـ auth باستخدام `getAuth` بدلاً من `firebase.auth()`
const auth = getAuth(app);

const db = getFirestore(app);


// تصدير `auth` و `signInWithEmailAndPassword` لاستخدامها في أماكن أخرى
export { auth, signInWithEmailAndPassword, db };
