import React, {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import './index.css';

const App = () => {
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
            <Footer />
        </Fragment>
    
    )
}

//ReactDOM.render(<App />, document.getElementById('root'))
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
