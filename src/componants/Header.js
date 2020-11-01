import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                TodoList
            </h1>
            <Link to="/" className='navBar'> Home </Link> |
            <Link to="/about" className='navBar'> About </Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor:'#2d2d2d',
    color:'#e6e6e6',
    padding: '10px',
    textAlign:'center'
}

export default Header;