import { firebaseConfig } from '../utils/firebase';

export async function SignInSocialMedia(provider) {
  try {
    const res = await firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then(async (response) => {
        const userId = await getUserId(response.user.uid)
          .then((data) => data.data)
          .catch((err) => err);

        if (userId === null) {
          /**User not exist in the db **/
          const data = {
            _uid: response.user.uid,
            first_name: response.additionalUserInfo.profile.given_name,
            last_name: response.additionalUserInfo.profile.family_name,
          };

          /** Register user*/
          try {
            const user = await Register(data)
              .then((result) => result.data)
              .catch((error) => error);
            return user;
          } catch (error) {
            return error;
          }
        }

        return userId;
      })
      .then(async (data) => {
        try {
          /** get token*/
          const token = await getTokenId();

          /**Return object with token and data */
          const response = {
            token,
            data: {
              username: `${data.first_name} ${data.last_name}`,
              _id: data._id,
            },
          };
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
export async function Register(data) {
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
 * @returns {string}
 */
export async function getTokenId() {
  try {
    const res = await firebaseConfig
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => idToken);
    return res;
  } catch (error) {
    return error;
  }
}
