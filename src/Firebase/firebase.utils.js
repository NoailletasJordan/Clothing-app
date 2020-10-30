import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDwn-JXkzk1qWHkfemyCh3Btd9QyvIJSaE',
  authDomain: 'clothing-app-856be.firebaseapp.com',
  databaseURL: 'https://clothing-app-856be.firebaseio.com',
  projectId: 'clothing-app-856be',
  storageBucket: 'clothing-app-856be.appspot.com',
  messagingSenderId: '361613469055',
  appId: '1:361613469055:web:4f0651288956c1447ba64a',
  measurementId: 'G-3EJ1L1XTG4',
}

export const createUserProfileDocument = async (
  firebaseUser,
  displayName,
  additionnalData
) => {
  if (firebaseUser) {
    const userRef = firestore.doc(`user/${firebaseUser.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
      const createdAt = new Date()
      const { email } = firebaseUser
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionnalData,
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
  } else return
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' }) // not sure what is is used for

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((err) => {
    console.log(err)
    return { error: true }
  })

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection('collection')
  console.log(collectionRef)

  const batch = firestore.batch()
  objectsToAdd.forEach((elt) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, { ...elt })
  })
  await batch.commit().then(() => console.log('dooooone'))
}

export const convertCollectionToUsable = (collection) => {
  collection.items.forEach((item) => {
    item.key = item.id
  })
  return {
    ...collection,
    key: collection.items.length + collection.title,
    routeName: encodeURI(collection.title.toLowerCase()),
  }
}

export default firebase
