import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice"


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
          })
            .catch((error) => {
            
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
              navigate("/browse")
            } 
            else {
              dispatch(removeUser())
              navigate("/");
            
            }
        });

        return () => unsubscribe();
    }, [])


    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
    }


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
             src={LOGO} alt="logo"/> 

             {user && (<div className="flex p-2">
              <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                onClick={handleGptSearchClick}
              >
                GPT Search
                </button>
                <img
                className="w-12 h-12"
                alt="user" src={USER_ICON}/>
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
             </div>)}
        </div>
    )
}


export default Header;