import React from 'react';
import MessageType from '../MessageType/MessageType'
import './Chats.css';

function Chats() {
    return (
        <div className="Chats w-full text-white flex justify-between flex-col">

        <div className="chat_head h-12 w-full flex items-center justify-center">
            # general
        </div>

        <div className="chats-preview text-center">
            Message Preview
        </div>

        <MessageType />
        </div>
    )
}

export default Chats
