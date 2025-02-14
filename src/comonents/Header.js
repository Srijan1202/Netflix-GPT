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

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        // ...
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
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
      {/* bg-gradient-to-b from-black flex justify-between items-center h-28 */}
      <img src={img} alt="" className="w-40 ml-6" />
      {user && (
        <div className="flex justify-end mr-10 ">
          <img className="h-14" src={user.photoURL} alt="img" />
          {console.log(user.photoURL)}

          <button
            className="text-red-600 ml-10 font-bold border-2 border-red-600 rounded-md px-4 py-1 hover:bg-gradient-to-b from-red-700"
            onClick={handlesignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
