import React from 'react';
import './Users.css';
import logo from '../Assets/img/logo.png'

function Dp({user}) {
    return (
        <div>
            <div className={`flex flex-col items-center justify-center mt-3 mb-3 ${user}`}>
            <img src={logo} style={{width: "35px" }} alt="logo"/>
         </div>
        </div>
    )
}

export default Dp
