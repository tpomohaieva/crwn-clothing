import React /*useEffect*/ from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = createUserDocFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
