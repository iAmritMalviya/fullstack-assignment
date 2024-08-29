import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
        </div>
    );
};

export default Card;