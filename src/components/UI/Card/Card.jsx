import React from "react";
import classes from './Card.module.css';
// import './Card.modules.css'
const Card = (props) => {
  //Card is passed in AddUser
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;
