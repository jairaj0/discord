import React from 'react';
import Profile from '../Profile/Profile'
import './Servers.css';

function Servers() {
    return (
        <div className="Servers w-96 h-screen flex items-center flex-col text-white justify-between">
        
        <div className="servers_name text-white h-12 w-full flex items-center justify-center">
            Server Name ^
        </div>

        <div className="servers">
            Servers
        </div>

        <Profile />
        </div>
    )
}

export default Servers
