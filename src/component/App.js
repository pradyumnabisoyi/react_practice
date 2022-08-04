import React, {Fragment, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: JSON
        };
    }

    render () {
        return (
            <Fragment>
                <Header />
                <ProductDisplay products={this.state.products}/>
                <Footer year='2022' author='Pradyumna'/>
            </Fragment>
        )
    }
}
export default App;