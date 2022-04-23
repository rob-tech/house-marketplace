// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbAYiQYzFlAoax4fcIdpXcYdpfpBfnNBo',
  authDomain: 'house-marketplace-e8079.firebaseapp.com',
  projectId: 'house-marketplace-e8079',
  storageBucket: 'house-marketplace-e8079.appspot.com',
  messagingSenderId: '830729874920',
  appId: '1:830729874920:web:95e2a8f50832162be7c85d',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
