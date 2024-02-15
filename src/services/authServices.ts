import * as FirebaseAuth from "@firebase/auth";
import firebaseAuth, { googleAuthProvider } from "./firebaseAuth";

export { firebaseAuth };
export const user = firebaseAuth.currentUser;
if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

export const signIn = FirebaseAuth.signInWithPopup(
  firebaseAuth,
  googleAuthProvider
)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential =
      FirebaseAuth.GoogleAuthProvider.credentialFromResult(result);
    console.log(credential?.accessToken);
    console.log(result.user);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential =
      FirebaseAuth.GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export const signOut = FirebaseAuth.signOut(firebaseAuth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });

export const observerAuthState = (
  observer: (user: FirebaseAuth.User | null) => void
) => FirebaseAuth.onAuthStateChanged(firebaseAuth, observer);

export const updateProfile = ({
  displayName,
  photoURL,
}: {
  displayName?: string;
  photoURL?: string;
}) =>
  user &&
  FirebaseAuth.updateProfile(user, {
    displayName,
    photoURL,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

export const updateEmail = (email: string) =>
  user &&
  FirebaseAuth.updateEmail(user, email)
    .then(() => {
      // Email updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

export const verifyEmail =
  user &&
  FirebaseAuth.sendEmailVerification(user).then(() => {
    // Email verification sent!
    // ...
  });

export const updateUserPassword = (newPassword: string) =>
  user &&
  FirebaseAuth.updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });

export const resetPassword = (email: string) =>
  FirebaseAuth.sendPasswordResetEmail(firebaseAuth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const deleteUser = () =>
  user &&
  FirebaseAuth.deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
