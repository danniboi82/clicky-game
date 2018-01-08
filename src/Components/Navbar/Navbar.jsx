import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


const handleClick = () => {
    alert("HOW CAN I CONNECT an AnCHOR TAG");
    //I want to click title and send user to another link 
}

const navbarStyle = {
    color: 'black',
}

const Navbar = (props) => {
    return (
        <div>
            <AppBar
                href='/'
                title='Clicky Game'
                titleStyle={navbarStyle}
                onTitleClick={handleClick}
                iconClassNameRight='muidocs-icon-navigation-expand-more'
            >
                <p><b>Score :</b> {props.score} | <b>Top Score</b> : {props.topScore}</p>
            </AppBar>

        </div>
    )
}

export default Navbar;