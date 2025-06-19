import './Card.css';
import React from 'react';

const Card = (props) => {
    const classes = 'card ' + props.className; // Combine 'card' with any additional class names passed via props
    return (
        <div className={classes}>
            {props.children} {/* Render any child components or elements inside the card */}
        </div>
    );
}

export default Card;