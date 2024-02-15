import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebaseApp from "./firebaseApp";
const firebaseAuth = getAuth(firebaseApp);

export const googleAuthProvider = new GoogleAuthProvider();

export default firebaseAuth;
