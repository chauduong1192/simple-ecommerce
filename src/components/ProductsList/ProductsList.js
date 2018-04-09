import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Input,
  Button, ButtonGroup
} from 'reactstrap';

import { connect } from 'react-redux';
import { getProducts, productsSelectors } from '../../state/ducks/products';

import Product from '../Product';
import Breadcrum from '../Common/Breadcrum';

import './ProductsList.css';

const splitCategoryId = (match) => {
  const matchNew = match.params.categoryId;
  const array = matchNew.split('-');
  const categoryId = array[array.length - 1];
  return categoryId;
};
  

class ProductsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      brands: [],
      isSort: 'low',
      selectedBrands: []
    }

    this.sortProduct = this.sortProduct.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    if(splitCategoryId(nextProps.match) === splitCategoryId(this.props.match)) return;
    await this.getProductbyCategoryId(nextProps.match);
  }
  
  async componentDidMount() {
    await this.getProductbyCategoryId(this.props.match);
  }

  sortProduct(e) {
    const value = e.target.value;
    this.setState({
      products: this.props.sortProducts(value),
      isSort: value
    })
  }

  filterProduct(e) {
    const filter = e.currentTarget.dataset.id;
    // console.log(this.props.filterProducts([...this.state.selectedBrands, filter]));
    
    if(!this.state.selectedBrands.includes(filter)) {
      this.setState({
        selectedBrands: [...this.state.selectedBrands, filter],
        // products : this.props.filterProducts([...this.state.selectedBrands, filter])
      })
    }
    
  }
  removeFilter(e) {
    const filter = e.currentTarget.dataset.id;
    this.setState({
      selectedBrands: this.state.selectedBrands.filter(brand => brand !== filter),
      // products : this.props.filterProducts(this.state.selectedBrands)
    })
  }

  async getProductbyCategoryId(match) {
    const categoryId = splitCategoryId(match);
    try {
      await this.props.getProducts({categoryId});
      const products = this.props.sortProducts(this.state.isSort);
      this.setState({
        products,
        brands: this.props.products
      });
    } catch (error) {
        console.log(error);
    }
  }

  renderFilter(filters) {
    if(!filters.length) return;
    return filters.map(filter => 
      <div key={filter}>
        {filter}
        <span
          onClick={this.removeFilter}
          className="close"
          data-id={filter}
        >x</span>
      </div>
    )
  }

  renderBrand(brands) {
    if(!brands.length) return;
    return brands.map(brand => 
      <li
        key={brand.brand.name}
        onClick={this.filterProduct}
        data-id={brand.brand.name}
      >
        <a>
          {brand.brand.name}
        </a>
      </li>
    )
  }
  
  renderProducts(products) {
    if(!products.length) return;
    return products.map(product =>
      <Product key={product.id} md="4" sm="6" xs="12" product={product} />
    )
  }

  render() {
    return(
      <Container className="product-list">
        <Row>
          <Col md="12" sm="12">
            <Breadcrum url={this.props.match.url}/>
          </Col>
          <Col md="3" sm="12">
            <div>
              <div className="shop-cart">
                  <h4>Brands</h4>
                  <ul className="side-list">
                    {
                      this.renderBrand(this.state.brands)
                    }
                  </ul>
              </div>
              <div className="cart-filters">
                {
                  this.renderFilter(this.state.selectedBrands)
                }
              </div>
            </div>
          </Col>
          <Col md="9" sm="12">
            <Row>
              <Col md="6">
                <Input type="select" className="sort-select" onChange={this.sortProduct} value={this.state.isSort}>
                  <option value="low">Price, Low First</option>
                  <option value="high">Price, High First</option>
                </Input>
              </Col>
              <Col md="6" className="total-products">
                <span>4 products</span>
              </Col>
            </Row>
            <Row>
              {
                this.renderProducts(this.state.products)
              }
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const propTypes = {
  match: PropTypes.object.isRequired,
};

ProductsList.propTypes = propTypes;

export default connect(
  state => ({
      products: productsSelectors.getProducts(state),
      sortProducts: productsSelectors.sortProducts(state),
      filterProducts: productsSelectors.filterProducts(state),
      
  }), {
      getProducts,
  },
)(ProductsList);
