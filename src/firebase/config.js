import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDxQMuFftD2X4hDeRvp65uoPeTFQPVeFVs",
    authDomain: "olx-test-29524.firebaseapp.com",
    projectId: "olx-test-29524",
    storageBucket: "olx-test-29524.appspot.com",
    messagingSenderId: "263841269809",
    appId: "1:263841269809:web:cb304451d464cf58cced10",
    measurementId: "G-E6CW02YD74"
  };

 export default firebase.initializeApp(firebaseConfig)