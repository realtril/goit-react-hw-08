import axios from "axios";
import authActions from "../actions/authAction";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerOperation = (userData) => async (dispatch) => {
  try {
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/signup",
      userData
    );
    token.set(result.data.token);
    dispatch(authActions.registerSuccess(result.data));
    console.log(result.data);
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export const loginOperation = (userData) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/login",
      userData
    );
    token.set(result.data.token);
    dispatch(authActions.loginSuccess(result.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("https://goit-phonebook-api.herokuapp.com/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const result = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSeccess(result.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

export default { registerOperation, loginOperation, logOut, getCurrentUser };
