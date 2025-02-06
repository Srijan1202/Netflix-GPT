import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import Validate from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const names = useRef(null);
  const navigate = useNavigate();

  const [signin, setsignin] = useState("Sign In");
  const [checker, setchecker] = useState("valid");

  const changesign = () => {
    setsignin(signin === "Sign In" ? "Sign Up" : "Sign In");
  };

  function check() {
    const res = Validate(email.current.value, password.current.value);

    if (res !== "valid") {
      setchecker(res);
      return;

    }

    if (signin === "Sign Up") {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: names.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          console.log(user);
          navigate("/Browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setchecker(errorCode,errorMessage);
          
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Browse")
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setchecker(errorCode,errorMessage);

        });
    }
  }

  return (
    // <div className="bg-black ">
    <div>
      <div className="absolute -z-10">
        <img
          className="opacity-60 w-[100vw] h-[100vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
          alt="img"
        />
      </div>
      <Header />
      <form
        action=""
        className="bg-black absolute w-2/6 py-6 px-14 mx-auto right-0 left-0 bg-opacity-70"
      >
        <h1 className="text-3xl text-white font-bold pb-4 my-4  ">
          {signin === "Sign In" ? "Sign In" : "Sign Up"}
        </h1>
        {signin === "Sign Up" && (
          <input ref={names}
            type="text"
            placeholder="Name"
            className="text-white bg-gray-950 p-4 my-4 rounded-sm opacity-70 border-white w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="text-white bg-gray-950 p-4 my-4 rounded-sm opacity-70 border-white w-full"
        />

        {/* {checker!=="valid" && <div className="text-red-600">{checker}</div>} */}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white bg-gray-950 p-4 my-4 rounded-sm opacity-70 border-white w-full"
        />

        {checker !== "valid" && <div className="text-red-600">{checker}</div>}

        <button
          className="bg-[#e50914] hover:bg-[#c11119] p-2 mt-2 rounded-sm border-white w-full text-white font-bold"
          type="button"
          onClick={check}
        >
          {signin === "Sign In" ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-white mt-4  mb-4">Forgot Pasword</div>

        <label htmlFor="" className="text-white ">
          <input type="checkbox" className="h-4 w-4" /> Remember me
        </label>
        <div className="text-red-600 mt-4 cursor-pointer" onClick={changesign}>
          {signin === "Sign In"
            ? "New to Netflix? Sign up now."
            : "Already have a account Sign In now"}
        </div>
        <div className="text-white text-sm mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </div>
      </form>
    </div>
    // </div>
  );
};

export default Login;
