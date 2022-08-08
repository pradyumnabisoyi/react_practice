import React from 'react';
import "../index.css";

const Footer = (props) => {
    //console.log(props)
    return (
        <React.Fragment>
            <footer className="footer-container">
                <hr />
                <center><h3>&copy;Chatashali - {props.year} | Author:{props.author}</h3>
                </center>
            </footer>
        </React.Fragment>
    )
}

export default Footer;