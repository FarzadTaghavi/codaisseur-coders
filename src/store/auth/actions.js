import axios from "axios";
import { API_URL } from "../../config/vars";
console.log(API_URL);

export function userLoggedIn(token, profile) {
  return {
    type: "LOGIN_SUCCESSFUL",
    payload: {
      token,
      profile,
    },
  };
}

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });

      const token = loginResponse.data.jwt;
      localStorage.setItem("myToken", token);
      dispatch(getUserProfile(token));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const bootstrapLoginState = () => {
  return (dispatch, getState) => {
    const myToken = localStorage.getItem("myToken");
    console.log("saved token", myToken);
    if (myToken) {
      dispatch(getUserProfile(myToken));
    }
  };
};

export const getUserProfile = (token) => {
  return async (dispatch, getState) => {
    const userProfileResponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = userProfileResponse.data;
    dispatch(userLoggedIn(token, userProfile));
  };
};

// kelley@codaisseur.com
