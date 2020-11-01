import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                TodoList
            </h1>
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