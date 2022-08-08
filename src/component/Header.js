import React from 'react';

class   Header extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Chatashali',
            message: 'User Text Here'
        }
    }
    setMessage = (event) => {
        //console.log(event.target.value)
        this.setState({message:event.target.value? event.target.value : 'User Text Here'})
        this.props.userInput(event.target.value)
    }
    render () {
        const mystyle = {
            header: {
                backgroundColor:'teal',
                color:'white'
            }
        }
        return (
            <>
                <center style={mystyle.header}><h1>{this.state.title}</h1>
                <input onChange={this.setMessage}/>
                <div style={{color:'red', fontSize:'20px'}}>{this.state.message}</div>
                </center>
                <hr/>
            </>
        );
    }
}

export default Header;