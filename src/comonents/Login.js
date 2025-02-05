import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
          alt="img"
        />
      </div>
      <Header/>
      <form
        action=""
        className="bg-black absolute w-2/6 p-12   mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="text-3xl text-white font-bold pb-6 p-2 my-4  ">Sign In</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="text-white bg-gray-950 p-4 my-4 rounded-sm opacity-80 border-white w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white bg-gray-950 p-4 my-4 rounded-sm opacity-80 border-white w-full"
        />
        <button className="bg-[#ce0e17] hover:bg-[#c11119] p-2 mt-2 rounded-sm border-white w-full text-white font-bold">
          SignIn
        </button>
        <div className="text-red-600 mt-4">Does not have a account yet join</div>
      </form>
    </div>
  );
};

export default Login;
