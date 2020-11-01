import React from "react";

function About() {
    return (
        <div style={aboutStyle}>
            <h1>About</h1>
            <p>This is a TodoList app built using React.js</p>
        </div>
    )
}

const aboutStyle = {
    background:'#6666ff',
    margin:'10px',
    padding:'10px',
    borderRadius:'25px',
}

export default About;