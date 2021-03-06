import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//Check for token
export const loadUser = () => (dispatch, getState) => {
  //loading user
  dispatch({ type: USER_LOADING });

  //Authenticate user
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//REgister user
export const register = ({ name, email, password, admin }) => dispatch => {
  //header
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  //Body
  const body = JSON.stringify({ name, email, password, admin });

  axios
    .post("/api/users", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//LogIn User
export const login = ({ email, password }) => dispatch => {
  //header
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  //Body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const tokenConfig = getState => {
  //Get token from localstorage
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if there's a token add it
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
