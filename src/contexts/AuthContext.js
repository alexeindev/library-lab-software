import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup  (email, password,values) {
    await auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
    await db.collection('users').doc().set(values);
  }

  async function createCollection  (values,collection) {
    await db.collection(collection).doc().set(values);
  }

  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  function logout() {
    return auth.signOut()
  }

  function editcollection(values,id,collection){
    return db.collection(collection).doc(id).update(values);
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    createCollection,
    editcollection,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}