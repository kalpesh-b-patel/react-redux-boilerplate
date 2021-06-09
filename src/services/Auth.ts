import firebase from 'firebase';

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

export const logout = () => {
  firebase.auth().signOut();
};
