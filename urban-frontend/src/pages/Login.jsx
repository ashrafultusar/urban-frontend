import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-prata text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}

      <input
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        required
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
              <p className="cursor-pointer">Forgot Your Password?</p>
              {
                  currentState==="Login"?<p className="cursor-pointer">Create account</p>:<p className="cursor-pointer">Login Here</p>
              }
          </div>
    </form>
  );
};

export default Login;
