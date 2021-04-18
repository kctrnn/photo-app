import firebase from 'firebase/app';
import 'firebase/auth';

const userApi = {
  // fake API
  getMe: () =>
    new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      setTimeout(() => {
        const currentUser = firebase.auth().currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoUrl: currentUser.photoURL,
        });
      }, 500);
    }),
};

export default userApi;
