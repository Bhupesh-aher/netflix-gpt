import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    

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

    const handleLanguageChange = (e) => {
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
      
    }
 
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
             src={LOGO} alt="logo"/> 

             {user && (<div className="flex p-2">

              {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white " onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>) )}
                
              </select>)}

              <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "HomePage" : "GPT Search"}
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