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
 * @returns {data}
 */
export async function SignInSocialMedia(provider) {
  try {
    const res = await firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then(async (response) => {
        let data = {};

        const userId = await getUserId(response.user.uid)
          .then((data) => data.data)
          .catch((err) => err);

        if (userId === null) {
          /**User not exist in the db **/
          if (response.additionalUserInfo.providerId === 'google.com') {
            data = {
              _uid: response.user.uid,
              first_name: response.additionalUserInfo.profile.given_name,
              last_name: response.additionalUserInfo.profile.family_name,
            };
          } else if (
            response.additionalUserInfo.providerId === 'facebook.com'
          ) {
            data = {
              _uid: response.user.uid,
              first_name: `${response.additionalUserInfo.profile.first_name} ${response.additionalUserInfo.profile.middle_name}`,
              last_name: response.additionalUserInfo.profile.last_name,
            };
          }

          /** Register user*/
          try {
            const user = await RegisterUser(data)
              .then((result) => result.data)
              .catch((error) => error);
            return user;
          } catch (error) {
            return error;
          }
        }

        return userId;
      })
      .then(async (userId) => {
        try {
          /** get token*/
          const data = {
            username: `${userId.first_name} ${userId.last_name}`,
            _id: userId._id,
          };
          const response = await getTokenId(data);

          return response;
        } catch (error) {
          return error;
        }
      })
      .catch((error) => {
        return error;
      });

    return res;
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
