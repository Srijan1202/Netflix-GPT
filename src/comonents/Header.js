import React from "react";
import img from "../utils/pngwing.com.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleHandler } from "../utils/toggleSlice";
import { Supported_languages } from "../utils/constants";
import { setLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handletoggle = () => {
    dispatch(toggleHandler());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        navigate("/Browse");

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const user = useSelector((state) => state.user);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      {/* bg-gradient-to-b from-black flex justify-between items-center h-28 */}
      <img src={img} alt="" className="w-40 ml-6 " />
      {user && (
        <div className="flex justify-end mr-10 ">
          <select
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            name="language"
            className="border-2 border-red-600 p-2 bg-black text-red-600 font-bold rounded-md  hover:bg-gradient-to-b from-red-600"
          >
            {Supported_languages.map((e) => (
              <option key={e.identifier} value={e.identifier}>
                {e.name}
              </option>
            ))}
          </select>
          <button
            className=" border-2 ml-10 border-red-600 p-2 text-red-600 font-bold rounded-md  hover:bg-gradient-to-b from-red-600 "
            onClick={handletoggle}
          >
            GPTsearch
          </button>
          <button
            className="text-red-600 ml-10 font-bold border-2 border-red-600 rounded-md px-4 py-1 hover:bg-gradient-to-b from-red-700"
            onClick={handlesignout}
          >
            Sign Out
          </button>
          <div className="border-red-600 border-2 rounded-full h-14 w-14 md:flex justify-center items-center ml-10 md:block hidden">
            <img
              className="none rounded-full h-14 w-14 "
              src={user.photoURL}
              alt="img"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
