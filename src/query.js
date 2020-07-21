const { firebaseConfig } = require('./utils/firebase');

const createUser = (email, password) => {
  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      if (res.user) Auth.setLoggedIn(true);
    })
    .catch((e) => {
      setErrors(e.message);
    });
};

createUser('julian9129@hotmail.com', '123456');
