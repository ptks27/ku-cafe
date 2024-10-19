//import logo from './logo.svg';
import React, {Component, component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import { connect } from 'react-redux';
import { productsFetch } from "../actions";
//import './Home.css';
//import ProductItem from './components/product/ProductItem';
//import axios from 'axios';
//import { Collapse } from 'bootstrap';

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.productsFetch();

  }
  

  render() {
    return (
      <div>
        <Header/>
        {this.props.products && Array.isArray(this.props.products) &&
        (<Monitor products = {this.props.products} />)
        }
        <Footer company = "KUKPS" email = "bptk@ku.th" />
      </div>
    );
  }

}


function mapStateToProps ({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch }) (Home);