import React from 'react';

const CardDetailsProductComponent = (props) => {
    let { id, title, description, price } = props.history.location.state;

    return (
        <div className="grid">
            <div >
                <h4>{title}</h4>
                <p>{description}</p>
                <span>{price}</span>
                <span>{id}</span>
            </div>
        </div>
    );
};


export default CardDetailsProductComponent;