import React from 'react';
import './Users.css';
function ProfilePic({pic}) {
    return (
        <div>
            <div className="user flex flex-col items-center justify-center mb-1 mt-1 " style={{backgroundImage: `url(${pic})` , backgroundSize: "cover" , backgroundPosition: "center"}}>
            </div>
        </div>
    )
}

export default ProfilePic
