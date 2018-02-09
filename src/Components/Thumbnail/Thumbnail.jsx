import React from 'react';
import Paper from 'material-ui/Paper/Paper'

const style = {
    paper:{
        maxWidth: '100%',
        maxHeight: '100%',
        margin: '20px',
        display: 'inline-block'
    },
    image:{
        height: '250px',
        width: '250px',
    }

}


const thumbnail = (props) => {
    return (
        <div>
            <Paper 
            style={style.paper} 
            zDepth={5} 
            rounded={false}
            onClick={() => props.handleClick(props.id)}
            >
                <img src={props.image} alt="" style={style.image}/>
            </Paper>
        </div>
    );
}

export default thumbnail;