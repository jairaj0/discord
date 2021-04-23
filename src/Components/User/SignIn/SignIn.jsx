import React from 'react';
import firebase from 'firebase/app';
import {  auth } from '../../../App';
const SignIn = () => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};
	return (
		<>
			<button onClick={signInWithGoogle}>SignIn</button>
		</>
	);
};
   

export default SignIn;
