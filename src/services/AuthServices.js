import { firebaseConfig } from '../utils/firebase';

/**
 * Function that sinig to app with email and password
 * @param {string} email
 * @param {string} password
 */
export async function SingInEmailPassword(email, password) {
  try {
    const res = await firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const data = {
          code: 'success',
          message: 'user Auth',
          data: {
            username: response.user.displayName,
            _id: response.user.uid,
          },
        };
        return data;
      })
      .catch((error) => {
        let res = {
          code: error.code,
          message: error.message,
          data: null,
        };
        return res;
      });
    return res;
  } catch (error) {
    return error;
  }
}

/**
 * Function that SingIn with social media
 * If the user no existed in the database, this the created
 * @param {*} provider
 * @returns {Array} {data:{username , _id} , token}
 */
export async function SignInSocialMedia(provider) {
  try {
    let data = {};

    const sigInSocialMedia = await firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then((response) => response)
      .catch((error) => {
        return error;
      });

    const userId = await getUserId(sigInSocialMedia.user.uid);

    if (userId.data === null) {
      /**User not exist in the db **/
      if (sigInSocialMedia.additionalUserInfo.providerId === 'google.com') {
        data = {
          _uid: sigInSocialMedia.user.uid,
          first_name: sigInSocialMedia.additionalUserInfo.profile.given_name,
          last_name: sigInSocialMedia.additionalUserInfo.profile.family_name,
        };
      } else if (
        sigInSocialMedia.additionalUserInfo.providerId === 'facebook.com'
      ) {
        data = {
          _uid: sigInSocialMedia.user.uid,
          first_name: `${sigInSocialMedia.additionalUserInfo.profile.first_name} ${sigInSocialMedia.additionalUserInfo.profile.middle_name}`,
          last_name: sigInSocialMedia.additionalUserInfo.profile.last_name,
        };
      }

      /** Register user*/
      const user = await RegisterUser(data);

      /** get token*/
      const response = await getTokenId({
        username: `${user.first_name} ${user.last_name}`,
        _id: user._id,
      });
      return response;
    } else {
      /**User exist in the db **/
      /** get token*/
      const response = await getTokenId({
        username: `${userId.data.first_name} ${userId.data.last_name}`,
        _id: userId.data._id,
      });
      return response;
    }
  } catch (error) {
    return error;
  }
}

/**
 * Function Register users
 * @param {Object} data
 * @returns {Response}
 */
export async function RegisterUser(data) {
  try {
    const res = await fetch(`${process.env.URL_API_BACKEND}/auth/sign-up`, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    return error;
  }
}

/**
 * Function that queries user by _uid
 * @param {string} _uid
 * @returns {Response}
 */
export async function getUserId(uid) {
  try {
    const res = await fetch(`${process.env.URL_API_BACKEND}/users/${uid}`, {
      method: 'GET', // or 'PUT'
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    return error;
  }
}

/**
 * Function get tokend to firebase Auth
 * @param {Array} data{username , _id}
 * @returns {string}
 */
export async function getTokenId(data) {
  try {
    const res = await firebaseConfig
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        /**Return object with token and data */
        const response = {
          token: idToken,
          data,
        };
        return response;
      });

    return res;
  } catch (error) {
    return error;
  }
}

/**
 * Function that created user in Firebase Auth
 * @param {String} email
 * @param {String} password
 * @param {String} displayName
 * @returns {Object}
 */
export async function CreateUser(email, password, displayName) {
  try {
    const res = await firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.updateProfile({
          displayName,
        });

        let res = {
          code: 'success',
          message: 'user created in firebase',
          data: {
            uid: response.user.uid,
            email: response.user.email,
          },
        };
        return res;
      })
      .catch((error) => {
        let res = {
          code: error.code,
          message: error.message,
          data: null,
        };
        return res;
      });
    return res;
  } catch (error) {
    return error;
  }
}

export function SignOut() {
  firebaseConfig
    .auth()
    .signOut()
    .then((response) => {
      console.log(response);
      localStorage.clear();
    });
}
