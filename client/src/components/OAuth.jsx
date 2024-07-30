import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    const auth = getAuth(app); // We have to insert app from firebase or else FireBase won't know who is requesting
    
    // Used to configure and manage Google Sign-in/ up for Firebase Authentication
    // Allows our application to authenticate users using their Google Accounts.
    const provider = new GoogleAuthProvider(); 

    provider.setCustomParameters({ prompt: 'select_account' }); 
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      // after succesful sign in we'll send specific information of the user to the backend/database via sending a response:
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      })
      // convert the desired data back to .json format, and then nvagiate to that users home page
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
      // console.log(resultsFromGoogle);
    } catch (error) {
      // next(error);
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
