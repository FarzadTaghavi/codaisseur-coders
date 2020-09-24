const initialState = {
  me: null,
  accessToken: null,
};

export default function profileSliceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "LOGIN_SUCCESSFUL": {
      return {
        accessToken: payload.token,
        me: payload.profile,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("myToken");
      return initialState;
    }
    default: {
      return state;
    }
  }
}
