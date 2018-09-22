import React from 'react';

const Score = props => (
    <div className='row'>
        <div className='flow-text'>Current Score: 
        <span className='flow-text'>{props.currentScore}</span> 
    <span> | </span>
        <span>High Score: {props.maxScore}</span>
        </div>
    </div>
)

export default Score