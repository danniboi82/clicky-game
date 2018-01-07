import React, { Component } from 'react';
// import '../../Static/images/Chief_Wiggum'


class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { id: 'pic00', img: {} }
            ]
        }
    }

    render() {

        return (
            <div>
                <h1>HOW THE HELL DO I USE STATIC IMAGES in REACT!</h1>
                <img src='https://upload.wikimedia.org/wikipedia/en/7/7a/Chief_Wiggum.png' />
            </div>
        );
    }

}


export default Gameboard; 