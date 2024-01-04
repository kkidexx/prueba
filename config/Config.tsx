import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA9uWEa1sLD_yfVv_h0bVbxK3pgbGCU20A",
  authDomain: "app-mov2andyj.firebaseapp.com",
  databaseURL: "https://app-mov2andyj-default-rtdb.firebaseio.com/",
  projectId: "app-mov2andyj",
  storageBucket: "app-mov2andyj.appspot.com",
  messagingSenderId: "735483515468",
  appId: "1:735483515468:web:dad549919dcb521b721ae9"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)