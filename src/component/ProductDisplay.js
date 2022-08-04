import React from 'react';
import '../index.css';

const ProductDisplay = (props) => {
    console.log(props);
    return (
        <div className="App">
            <center>
                <h1>Welcome to ReactJS</h1>
                <p>
                    This is an example of how you can build your app using React.
                </p>
            </center>
        </div>
    )
        
}

export default ProductDisplay;