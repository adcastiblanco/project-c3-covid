const reducer = (state, actions) => {
  switch (actions.type) {
    case 'SET_APP':
      return {
        ...state,
        startapp: actions.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: actions.payload,
      };

    default:
      return state;
  }
};

export default reducer;
