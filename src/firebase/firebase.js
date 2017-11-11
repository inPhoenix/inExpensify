import * as firebase from 'firebase'
//import * as expensesActions from '../actions/expenses'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// ***********Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database()
// ***********End config


export { firebase, database as default };

//
// database.ref().set({
//   age: 30,
//   color: 'red',
//   isSingle: false
// })
// database.ref('name').set(
//   'phoenix2'
// )
//
// database.ref('color').set('blue')
//
// database.ref('isSingle').set(null)
//
// database.ref().update({
//   name: 'simon',
//   age: 50,
//   color: 'black',
//   tech: 'react2'
// })

// fetch example
// database.ref('name')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//   console.log(val)
// })
// .catch((e) => {
//   console.log("Error fetching data", 0);
// })

// subscribe
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })
// unsubscribe
//database.ref().off