import jwt_decode from "jwt-decode";

export const authenticateUser = async ({ username, password, role }) => {
  console.log(`Calling POST ${process.env.REACT_APP_BACKEND}/${role}/login`);
  
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/${role}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      role: role,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("access_token", data); // TODO: change the name of access_token
    return true;
  } else {
    console.log(data);
    return false;
  }
};

export const validateAuthorization = () => {
  try {
    const token = localStorage.getItem("access_token");
    const decodedToken = jwt_decode(token);
    const currTime = Date.now();

    /**
     * decodedToken.exp: is the number of seconds since Epoch time
     * Date.now(): is the number of milliseconds since Epoch time
     * decodedToken.exp * 1000 => is the number of milliseconds since Epoch time
     */

    // token is expired
    if (currTime > decodedToken.exp * 1000) {
      // TODO: replace "access_token" with a dynamic value or an env variable
      localStorage.removeItem("access_token");
      return null;
    }
    // token not expired
    else {
      // TODO: refactor to a message "you are already logged in" or find away to disable the login button
      // in order not be in here in the first place.
      return token;
    }
  } catch (err) {
    return null;
  }
};
