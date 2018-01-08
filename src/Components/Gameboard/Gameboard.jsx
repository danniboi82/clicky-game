import React, { Component } from 'react';
import characters from './gameImages.json';
import Thumbnail from '../Thumbnail/Thumbnail'




class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            characters

        }
    }

    gamePlayHandler = () => {
        
    }

    render() {

        return (
            <div>
                {this.state.characters.map(simpsons => {
                    return (
                        <div style={{display: 'inline-block'}}>
                            <Thumbnail 
                            key={simpsons.id}
                            image={simpsons.image}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }

}


export default Gameboard; 