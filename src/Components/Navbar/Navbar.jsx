import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';


const handleClick = () => {
   alert("HOW CAN I CONNECT an AnCHOR TAG"); 
   //I want to click title and send user to another link 
}

const Navbar = (props) => {
        return (
            <div>
                <AppBar 
                title='Clicky Game'  
                onTitleClick={handleClick}
                iconClassNameRight='muidocs-icon-navigation-expand-more'
                />
            
            </div>
        )
}

export default Navbar;