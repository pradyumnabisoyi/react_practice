import React, {Fragment, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: JSON,
            filteredData: JSON
        };
    }

    filterdata = (searchName) => {
        console.log(searchName)
        let output = this.state.products.filter(i => {
            return (i.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1)
        })
        this.setState({filteredData: output})
    }

    render () {
        return (
            <Fragment>
                <Header userInput={(data) => {this.filterdata(data)}}/>
                <ProductDisplay products={this.state.filteredData}/>
                <Footer year='2022' author='Pradyumna'/>
            </Fragment>
        )
    }
}
export default App;