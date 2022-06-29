// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, storage } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCG6YfZLLIKrnJPd84EWoYThA7Ctac-hY4',
  authDomain: 'le-conte-de-sheila.firebaseapp.com',
  projectId: 'le-conte-de-sheila',
  storageBucket: 'le-conte-de-sheila.appspot.com',
  messagingSenderId: '686748912259',
  appId: '1:686748912259:web:86606b0e55df7ebb4c29b6'
}

try {
  // Initialize Firebase
  initializeApp(firebaseConfig)
} catch (e) {}

// const analytics = getAnalytics(app);
const db = getFirestore()

export const fetchResourcesFirebaseDB = () => {
  return getDocs(collection(db, 'resources'))
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id

        return {
          ...data,
          id
        }
      })
    })
}

export const fetchResourcesFirebaseDB2 = () => {
  return db
    .collection('resources')
  // .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id

        return {
          ...data,
          id
        }
      })
    })
}

export const uploadImage = (file) => {
  const ref = storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
