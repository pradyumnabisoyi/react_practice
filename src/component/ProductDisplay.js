import React from 'react';
import "../index.css";

const ProductDisplay = (props) => {
    console.log(props);
    const renderproducts = props.products.map((element) => {
            return (
                <div className='card' key={element.id}>
                    <img src={element.image} alt={element.name} /> 
                    <div>
                    <h3>{element.name}</h3>
                    <p>{element.description}</p>
                    <p>Rs.{element.cost}</p>
                    <p>{element.uses}</p>
                </div>
                </div>
            )
        }
    )
    return (
        <div className='main'>
            {renderproducts}
        </div>
    )
}
export default ProductDisplay;