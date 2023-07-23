import './Card.css';
import React from 'react';


 function Card(props) {
   // return <div className='card'> {props.children} </div>

    const classes = 'card ' + props.className;
    return <div className={classes}> {props.children}   </div>

 }

 export default Card;