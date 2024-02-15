import { getAnalytics } from "firebase/analytics";
import firebaseApp from "./firebaseApp";

const firebaseAnalytics = getAnalytics(firebaseApp);
export default firebaseAnalytics;
