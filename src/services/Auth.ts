import firebase from 'firebase';

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_DATABASE_URL,
//   projectId: process.env.REACT_PROJECT_ID,
//   storageBucket: process.env.REACT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
// });

export const login = async (email: string, password: string) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return {
      success: true,
      data: user,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return {
      success: true,
      data: result.user,
    };
  } catch (err) {
    return {
      success: false,
      data: err.message,
    };
  }
};

// export const signup = (email: string, password: string) => {
//   console.log(email, password);
// };

export const logout = () => {
  firebase.auth().signOut();
};
