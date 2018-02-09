import React from 'react';
import './Header.css';
import GameMessage from './GameMessage/GameMessage';




const header = (props) => {
    return (
        <div>
            <div className='Header'>
                <h1>The SIMPSONS Click Pic Game!!</h1>
                <h3>Click on an image to earn points, You lose if you click same image AGAIN!!</h3>

            </div>
            <div style={{ borderBottom: '1px solid black' }}>
                <div className='Message'>
                    <GameMessage score={props.score} topScore={props.topScore} />
                </div>
                <p className='scoreBoard'><b>Score :</b> {props.score}</p>

                <p className='scoreBoard'><b>Top Score</b> : {props.topScore}</p>
            </div>
        </div>
    )
}

export default header;