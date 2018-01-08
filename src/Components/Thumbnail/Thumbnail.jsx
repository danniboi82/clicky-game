import React from 'react';
import Paper from 'material-ui/Paper/Paper'

const thumbnailStyle = {
    height: '250px',
    width: '250px',
    margin: '20px',
    display: 'inline-block'
}


const thumbnail = () => {
    return (
        <div>
            <Paper style={thumbnailStyle} zDepth={5} rounded={false} />
        </div>
    );
}

export default thumbnail;