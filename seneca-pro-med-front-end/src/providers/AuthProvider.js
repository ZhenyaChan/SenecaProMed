import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const initUserData = {};
  const initToken = localStorage.getItem("senecaProMedCart_accessToken") || "";
  const initIsLoggedIn = false;
  const initErrorMsg = "";

  const [userData, setUserData] = useState(initUserData);
  const [token, setToken] = useState(initToken);
  const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
  const [errorMsg, setErrorMsg] = useState(initErrorMsg);

  useEffect(() => {
    localStorage.setItem("senecaProMedCart_accessToken", initToken);

    if (initToken !== "") {
      setIsLoggedIn(true);
      setToken(initToken);
    }
  }, []);

  const login = async (formData) => {
    const role = formData.role;
    const username = formData.username;
    const password = formData.password;

    console.log(`Calling POST ${process.env.REACT_APP_BACKEND}/${role}/login`);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/${role}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          role: role,
        }),
      });

      if (res.ok) {
        const data = await res.json();

        localStorage.setItem("senecaProMedCart_accessToken", data);
        setToken(data);
        setIsLoggedIn(true);
        // TODO
        setUserData({ TODO: "TODO" });
      } else {
        throw new Error((await res.text()) || "Something went wrong");
      }
    } catch (err) {
      const parsedError = JSON.parse(err.message);

      if (parsedError === "Something went wrong") {
        setErrorMsg(parsedError);
      } else {
        // capitalize and set
        setErrorMsg(parsedError.message.charAt(0).toUpperCase() + parsedError.message.slice(1));
      }
    }
  };

  const logOut = () => {
    try {
      localStorage.removeItem("senecaProMedCart_accessToken");
      setUserData({});
      setToken("");
      setIsLoggedIn(false);
    } catch (err) {
      throw new Error(`unable to sign user out: ${err}`);
    }
  };

  const getUserData = ()=>{
    // TODO
  }

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
