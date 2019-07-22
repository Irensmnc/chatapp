import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyC0XZCSW3q5BD9th-zr75bjebOSHpaKs5g',
  authDomain: 'chat-app-32634.firebaseapp.com',
  databaseURL: 'https://chat-app-32634.firebaseio.com',
  projectId: 'chat-app-32634',
  storageBucket: 'chat-app-32634.appspot.com',
  messagingSenderId: '1075199945331',
  appId: '1:1075199945331:web:15dde914a8a78d34'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
