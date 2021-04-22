import React from 'react';
import Dp from './Dp';
import ProfilePic from './ProfilePic';
import './Users.css';

function Users() {
    return (
        <div className="Users w-28 h-screen flex flex-col items-center">
            <Dp user="logo user" />
            <ProfilePic pic="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <ProfilePic pic="https://images.unsplash.com/photo-1536009347613-a23f6bd7e217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <ProfilePic pic="https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" />
        </div>
    )
}

export default Users
