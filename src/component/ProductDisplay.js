import React from 'react';
import "../index.css";

const ProductDisplay = (props) => {
    console.log(props);
    const renderproducts = props.products.map((element) => {
            return (
                <div className='card'>
                    <img src={element.image} alt={element.name} /> 
                    {element.name}
                </div>
            )
        }
    )
    return (
        <div>
            {renderproducts}
        </div>
    )
}
export default ProductDisplay;