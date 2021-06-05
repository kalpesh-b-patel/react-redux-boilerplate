import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCHAN3NKB8U0ntTlYz5NRTCH8KuQyqPONk',
  authDomain: 'kp-react-firebase-auth.firebaseapp.com',
  databaseURL: 'https://kp-react-firebase-auth.firebaseio.com',
  projectId: 'kp-react-firebase-auth',
  storageBucket: 'kp-react-firebase-auth.appspot.com',
  messagingSenderId: '52910094821',
  appId: '1:52910094821:web:044a8c5eeadb354603170c',
});

export const login = async (email: string, password: string) => {
  try {
    const user = await app.auth().signInWithEmailAndPassword(email, password);
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
    const result = await app.auth().signInWithPopup(provider);
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
  app.auth().signOut();
};

export default app;
