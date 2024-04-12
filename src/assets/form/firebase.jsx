import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtcakzH0tV3XMeIyXocpL2kKht-6OXTEs",
    authDomain: "contact-form-agevent.firebaseapp.com",
    projectId: "contact-form-agevent",
    storageBucket: "contact-form-agevent.appspot.com",
    messagingSenderId: "806808407204",
    appId: "1:806808407204:web:1c220473c31f733b576a31"
  };

  if(!firebase.app.lenth){
    firebase.initializeApp(firebaseConfig);
  }

  export const firestore = firebase.firestore()