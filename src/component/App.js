import React, {Fragment, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../index.css';

class App extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <div className="App">
                    <center>
                        <h1>Welcome to ReactJS</h1>
                        <p>
                            This is an example of how you can build your app using React.
                        </p>
                    </center>
                </div>
                <Footer year='2022' author='Pradyumna'/>
            </Fragment>
        )
    }
}
export default App;