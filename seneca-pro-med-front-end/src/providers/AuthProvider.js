import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import jwt_decode from "jwt-decode";

const LOCAL_STORAGE_KEY = "senecaProMedCart_accessToken";
const BASE_URL = process.env.REACT_APP_BACKEND;

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // TODO: validate if token has been expired and remove if yes and refresh if not
    localStorage.setItem(LOCAL_STORAGE_KEY, token);

    // if token is not expired, re-set user data as user refresh the page
    if (token !== "") {
      // set the current user data
      const decoded_token = jwt_decode(token);
      setUserData(decoded_token);

      // set current user logged in status to true
      setIsLoggedIn(true);
    }

    setErrorMsg("");
  }, [token]);

  const login = async (formData) => {
    const role = formData.role;
    const username = formData.username;
    const password = formData.password;

    // request parameters
    const endpoint = role === "pharmacy" ? "/pharma/login" : `/${role}/login`;
    const method = "POST";
    const contentType = { "Content-Type": "application/json" };
    const body = { username: username, password: password, role: role };

    try {
      console.log(`Calling ${method} ${BASE_URL}${endpoint}`);

      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: contentType,
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error((await res.text()) || { message: "Something went wrong" });
      }

      // this return a token
      const token = await res.json();

      // save token to local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, token);

      // set token, isLoggedIn, and userData
      const decoded_token = jwt_decode(token);
      setUserData(decoded_token);
      setToken(token);
      setIsLoggedIn(true);
    } catch (err) {
      const currError = JSON.parse(err.message);
      setErrorMsg(currError.message);
    }
  };

  const logOut = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setUserData({});
      setToken("");
      setIsLoggedIn(false);
    } catch (err) {
      setErrorMsg(`unable to sign user out: ${err}`);
      throw new Error(`unable to sign user out: ${err}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        token,
        isLoggedIn,
        errorMsg,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
