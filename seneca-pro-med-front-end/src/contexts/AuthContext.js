import React from "react";

const AuthContext = React.createContext({
  userData: {},
  token: "",
  isLoggedIn: false,
  errorMsg: "",
  login: () => {},
  logOut: () => {},
  resetErrorMsg: () => {},
});

export default AuthContext;
