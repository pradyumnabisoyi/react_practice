import React from 'react';

class   Header extends React.Component {
    render () {
        const mystyle = {
            header: {
                backgroundColor:'teal',
                color:'white'
            }
        }
        return (
            <>
                <center style={mystyle.header}><h1>Chatashali</h1>
                <input/>
                <div style={{color:'red', fontSize:'20px'}}>User Text here</div>
                </center>
                <hr/>
            </>
        );
    }
}

export default Header;