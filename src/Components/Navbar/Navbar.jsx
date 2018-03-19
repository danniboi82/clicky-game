import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './Navbar.css';


const handleClick = () => {
    alert("HOW CAN I CONNECT an AnCHOR TAG");
    //I want to click title and send user to another link 
}

const navbarStyle = {
    color: 'black',
    fontFamily: "'Rock Salt', cursive",
    fontSize: '30px'
}

const Navbar = (props) => {
    return (
        <div>
            <AppBar
                href='/'
                title='Simpsons Click Pic'
                titleStyle={navbarStyle}
                onTitleClick={handleClick}
                iconClassNameRight='muidocs-icon-navigation-expand-more'
                showMenuIconButton={false}
            >
            </AppBar>

        </div>
    )
}

export default Navbar;