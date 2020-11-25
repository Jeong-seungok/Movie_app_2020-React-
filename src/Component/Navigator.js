import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Navigator.css'

function Navigator(){
    return(
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>);
}

export default Navigator;
