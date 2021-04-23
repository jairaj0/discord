import './App.css';
import Home from './Components/Home/Home';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './config';
import { SignIn } from './Components/User';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {
	const [ user ] = useAuthState(auth);
  console.log('user :>> ', user);
	return (
		<>
			<section>{user ? <Home /> : <SignIn />}</section>
		</>
	);
}

export default App;
