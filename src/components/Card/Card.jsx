import React from 'react';
import "./Card.css";
export const Card = ({title, cardImg})=>{

    return(
        <div className="card">
            <figure className="icon-container">
                <img className="card-icon" src={cardImg}/>
            </figure>
            <div className="card-content">
                <h1 className="card-title">{title}</h1>
            </div>
        </div>

    );
    
};

export default Card;