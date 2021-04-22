import React from 'react';
import Servers from '../Servers.js/Servers';
import Users from '../Users/Users'
import Chats from '../Chats/Chats'
import Status from '../Status/Status'
import './Home.css';

function Home() {
    return (
        <div className="flex flex-row">
            <Users />
            <Servers />
            <Chats />
            <Status />
        </div>
    )
}

export default Home
