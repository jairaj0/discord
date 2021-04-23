import React from 'react';
import { auth } from '../../../App';

const SignOut = () => {
	return auth.currentUser && <button onClick={() => auth.signOut()}>SignOut</button>;
};

export default SignOut;
