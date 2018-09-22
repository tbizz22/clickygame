import React from 'react';
import './Card.css';


const Card = (props) => (
    <div 
    onClick={() => props.clickItem(props.id)}
    className='col l2 m4 s6'>
        <div className="card hoverable" id='{props.id}'>
            <div className="card-image">
                <img src={props.image} alt={props.name} />                
            </div>
            <div className="flow-text center-align"> {props.name}</div>
        </div>
    </div>

)

export default Card;