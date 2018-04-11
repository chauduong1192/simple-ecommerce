import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table
} from 'reactstrap';

import { connect } from 'react-redux';
import { checkout, cartsSelectors } from '../../state/ducks/carts';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import './CartCheckout.css';

const urlImage = 'assets/images';

class CartCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : 'chau.duong1192@gmail.com',
      fullName: 'Chau Duong',
      address: '117/62/8 Nguyen Huu Canh',
      district: 'Binh Thanh District',
      city: 'Ho Chi Minh',
      phoneNumber: '01696031616',
      isSelect: 'cash',
      deliveryCost: 5,
      activeTab: 1,
    }

    this.saveInfo = this.saveInfo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    !this.props.carts.length && this.props.history.push('/');
  }

  async saveInfo(e) {
    e.preventDefault();
    if(this.state.activeTab === 1) {
      this.setState({
        activeTab: 2
      })
      return;
    }

    if(this.state.activeTab === 2) {
      this.setState({
        activeTab: 3
      })
      await this.props.checkout();
      return;
    }
  }

  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  renderProductInCart() {
    const products = this.props.carts;
    return products.map(product => 
      <tr key={product.id}>
        <td className="border-0 pl-0" style={{ width: '10%' }}>
          <img width="70" src={`${urlImage}/products/${product.images[0]}`} alt="visa" />
        </td>
        <td className="border-0 pl-0">
          <div>{product.title}</div>
          <div>{product.quantity} x {`$${product.newPrice}`}</div>
        </td>
        <td className="border-0 text-right">${+product.quantity * +product.newPrice}</td>
      </tr>
    )
  }

  render() {

    const {
      email,
      fullName,
      address,
      district,
      city,
      phoneNumber,
      activeTab,
      isSelect,
      deliveryCost
    } = this.state;

    return(
      <Container className="cart-checkout">
        <Row>
          <Col className="steps mb-4" sm="12" md={{ size: 8, offset: 2 }}>
            <Col lg="4" className={`step ${activeTab === 1 ? 'current active' : 'disable'}`}>
                <span className="step-number">1</span>
                <div className="step-desc">
                  <span className="step-title">Account</span>
                  <p>Information</p>
                </div>
            </Col>
            <Col lg="4" className={`step ${activeTab === 2 ? 'current active' : 'disable'}`}>
                <span className="step-number">2</span>
                <div className="step-desc">
                  <span className="step-title">Billing</span>
                  <p>Information</p>
                </div>
            </Col>
            <Col lg="4" className={`step ${activeTab === 3 ? 'current active' : 'disable'}`}>
                <span className="step-number">3</span>
                <div className="step-desc">
                  <span className="step-title">Getting</span>
                  <p>Wating for the goods</p>
                </div>
            </Col>
          </Col>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Form onSubmit={this.saveInfo}>
                { activeTab === 1 &&
                  <div>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="Email" required value={email} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="fullName">Full name</Label>
                      <Input type="text" name="fullName" id="fullName" placeholder="Full Name" required value={fullName} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="address">Address</Label>
                      <Input type="text" name="address" id="address" placeholder="Address" required value={address} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="district">District</Label>
                      <Input type="text" name="district" id="district" placeholder="District" required value={district} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input type="text" name="city" id="city" placeholder="City" required value={city} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="phoneNumber">Phone number</Label>
                      <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone number" required value={phoneNumber} onChange={this.onChange}/>
                    </FormGroup>
                  </div>
                }
                { activeTab === 2 &&
                  <Row>
                    <Col md="5">
                      <div className="p-3 mt-3 confirm-form">
                        <h5>Customer infomation</h5>
                        <div className="">
                          <p className="mb-0 font-weight-bold">Customer name</p>
                          <p>{`${fullName} - ${phoneNumber}`}</p>
                          <p className="mb-0 font-weight-bold">Ship to</p>
                          <p>{`${address}, ${district}, ${city}`}</p>
                        </div>
                      </div>
                      <div className="p-3 mt-3 confirm-form">
                        <h5>Order infomation</h5>
                        <Table className="mb-0">
                          <tbody>
                            {
                              this.renderProductInCart()
                            }
                            <tr>
                            <td className="font-weight-bold pl-0">Total</td>
                              <td
                                colSpan="2"
                                className="text-right font-weight-bold"
                                style={{ fontSize: '18px' }}
                              >
                                ${this.props.totalPrice + (isSelect === 'cash' ? deliveryCost : 0)}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col md="7">
                      <div className="p-3 mt-3 confirm-form">
                        <FormGroup>
                          <Label for="select">Select your payment option</Label>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="isSelect" checked={isSelect === 'cash'} onChange={this.onChange} value="cash" />
                              Cash on Delivery
                            </Label>
                            <Label className="float-right font-weight-bold">
                              ${deliveryCost}
                            </Label>
                          </FormGroup>
                        <FormGroup check style={{clear: 'both'}}>
                            <Label check>
                              <Input type="radio" name="isSelect" checked={isSelect === 'card'} onChange={this.onChange} value="card" />
                              Credit/Debit Card
                            </Label>
                            <Label className="float-right font-weight-bold text-success">
                              Free Ship
                            </Label>
                          </FormGroup>
                        </FormGroup>
                        { isSelect === 'card' &&
                          <Row>
                            <FormGroup className="col-md-6">
                              <Label for="cardHolderName">Cardholder name</Label>
                              <Input type="text" name="cardHolderName" id="cardHolderName" placeholder="Cardholder name" required />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                              <Label for="cvv">CVV</Label>
                              <Input type="text" name="cvv" id="cvv" placeholder="CVV" maxLength="3" minLength="3" required />
                            </FormGroup>
                            <FormGroup className="col-md-12">
                              <Label for="cardNumber">Card number</Label>
                              <Input type="text" name="cardNumber" id="cardNumber" placeholder="Card number" minLength="16" maxLength="16" required />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                              <Label for="expiredDate">Expired date</Label>
                              <Input type="month" format="yyyy-mm" name="date"  required />
                            </FormGroup>
                            <FormGroup className="col-md-6 card-image">
                              <img src={`${urlImage}/visa.jpg`} alt="visa" />
                              <img src={`${urlImage}/mastercard.jpg`} alt="mastercard" />
                            </FormGroup>
                          </Row>
                        }
                      </div>
                    </Col>
                  </Row>
                }
                { activeTab === 3 &&
                  <div>
                    <div className="text-center my-20">
                      <FontAwesomeIcon icon={faCheck} size="3x"/>
                      <h4>Thank you {fullName}!</h4>
                    </div>
                    <div className="p-3 mt-3 confirm-form">
                      <h5>Your order is confirmed</h5>
                      <p>We've accepted your order, and we will call you within 3 hours to verify your order. An order confirmation email has been sent to your email address <b>{email}</b></p>
                    </div>
                  </div>
                }
                { activeTab !== 3
                  ?
                    <Button
                      type="submit"
                      color="primary"
                      block
                      className="mt-4"
                    >
                      {activeTab === 1 ? 'Save & Next' : 'Place order'}
                    </Button>
                  :
                    <Button
                      type="button"
                      onClick={() => this.props.history.push('/')}
                      color="primary"
                      block
                      className="mt-4"
                    >Go to Shopping</Button>
                }
              </Form>
            </Col>
        </Row>
      </Container>
    );
  };
};

const propTypes = {
  carts: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  checkout: PropTypes.func.isRequired,
};

CartCheckout.propTypes = propTypes;

export default connect(
  state => ({
    carts: cartsSelectors.getCarts(state),
    totalPrice: cartsSelectors.getTotal(state),
  }), {
    checkout
  },
)(CartCheckout);
