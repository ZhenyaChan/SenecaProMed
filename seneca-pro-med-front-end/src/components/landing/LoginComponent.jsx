import React from "react";

import "./LoginComponent.css";

const LoginComponent = () => {
  return (
    <div className="LoginComponent flex flex-col items-center gap-4">
      <h1 className="text-3xl">Select Your Role</h1>

      <form className="login-form flex flex-col items-center gap-8" action="" method="post">
        <fieldset className="user-roles flex flex-row items-center gap-4 w-full">
          <label htmlFor="admin" className="flex flex-row-reverse gap-1">
            Admin
            <input type="radio" name="user-role" id="admin" />
          </label>

          <label htmlFor="pharmacist" className="flex flex-row-reverse gap-1">
            Pharmacist
            <input type="radio" name="user-role" id="pharmacist" />
          </label>

          <label htmlFor="client" className="flex flex-row-reverse gap-1">
            Client
            <input type="radio" name="user-role" id="client" />
          </label>

          <label htmlFor="delivery-driver" className="flex flex-row-reverse gap-1">
            Deliver Driver
            <input type="radio" name="user-role" id="delivery-driver" />
          </label>
        </fieldset>

        <fieldset className="login-details flex flex-col gap-4 w-full">
          <label htmlFor="email" className="email flex flex-col">
            Email
            <input type="email" name="login" id="email" placeholder="Enter your email address" className="bg-slate-100 h-10" />
          </label>

          <label htmlFor="password" className="password flex flex-col">
            Password
            <input type="password" name="login" id="password" placeholder="Enter your password" className="bg-slate-100 h-10" />
          </label>
        </fieldset>

        <input className="w-full h-10 bg-slate-400" type="submit" value="Login" />
      </form>

      {/* eslint-disable-next-line */}
      <a href="#">Forgot your password?</a>

      {/* eslint-disable-next-line */}
      <a href="#" className="w-full">
        <button className="w-full h-10 bg-slate-200">Signup</button>
      </a>
    </div>
  );
};

export default LoginComponent;
