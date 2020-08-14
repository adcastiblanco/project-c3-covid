/**
 * Function with created a test in the database
 * @param {string} id_user
 * @param {Object} test
 * @returns {Array} {status , result:{alert,message}}W
 */
export async function CreateTest(id_user, test) {
  try {
    const date = new Date();

    const res = await fetch(`${process.env.URL_API_BACKEND}/test/`, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      body: JSON.stringify({
        id_user,
        test: {
          ...test,
          date: date.toISOString(),
        },
      }), // data can be `string` or {object}!
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
