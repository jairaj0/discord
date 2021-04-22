import React from 'react';
import './Status.css';

function Status() {
    return (
        <div className="Status w-96 text-white flex items-center flex-col">

        <div className="search h-12 w-full flex items-center justify-center">
        Search
        </div>

        <div className="status">
            Online
        </div>
        </div>
    )
}

export default Status
