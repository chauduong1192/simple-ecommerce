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
import {Link} from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import './CartCheckout.css';

const urlImage = 'assets/images';

class CartCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 3,
      email : '',
      fullName: '',
      address: '',
      city: '',
      phoneNumber: '',
      isSelect: 'cash'
    }

    this.saveInfo = this.saveInfo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  saveInfo(e) {
    e.preventDefault();

    this.setState({
      activeTab: 3
    })
    

  }

  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, fullName, address, city, phoneNumber, activeTab, isSelect } = this.state;
    return(
      <Container className="cart-checkout mb-5">
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
          { activeTab === 1 &&
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Form onSubmit={this.saveInfo}>
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
                  <Label for="city">City</Label>
                  <Input type="text" name="city" id="city" placeholder="City" required value={city} onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="phoneNumber">Phone number</Label>
                  <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone number" required value={phoneNumber} onChange={this.onChange}/>
                </FormGroup>
                <Button type="submit" color="primary" block className="mt-4">Save & Next</Button>
              </Form>
            </Col>
          }
          { activeTab === 2 &&
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Form>
                <FormGroup>
                  <Label for="select">Select your payment option</Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="isSelect" checked={isSelect === 'cash'} onChange={this.onChange} value="cash"/>
                      Cash on Delivery
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                    <Input type="radio" name="isSelect" checked={isSelect === 'card'} onChange={this.onChange} value="card"/>
                      Credit/Debit Card
                    </Label>
                  </FormGroup>
                </FormGroup>
                { isSelect === 'card' &&
                  <Row>
                    <FormGroup className="col-md-6">
                      <Label for="cardHolderName">Cardholder name</Label>
                      <Input type="text" name="cardHolderName" id="cardHolderName" placeholder="Cardholder name" required/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="cvv">CVV</Label>
                      <Input type="text" name="cvv" id="cvv" placeholder="CVV" maxLength="3" minLength="3" required/>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label for="cardNumber">Card number</Label>
                      <Input type="text" name="cardNumber" id="cardNumber" placeholder="Card number"  maxLength="16" required/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="expiredDate">Expired date</Label>
                      <Input type="month" name="date" required/>
                    </FormGroup>
                    <FormGroup className="col-md-6 card-image">
                      <img src={`${urlImage}/visa.jpg`} alt="visa"/>
                      <img src={`${urlImage}/mastercard.jpg`} alt="mastercard"/>
                      <img src={`${urlImage}/amex.jpg`} alt="amex"/>
                    </FormGroup>
                  </Row>
                }
                <Button color="primary" block className="mt-4">Pay</Button>
              </Form>
            </Col>
          }
          {activeTab === 3 &&
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <div className="text-center my-20">
                <FontAwesomeIcon icon={faCheck} size="3x"/>
                <h4>Thank you {fullName}!</h4>
              </div>
              <div className="p-3 mt-3 confirm-form">
                <h5>Your order is confirmed</h5>
                <p>We've accepted your order, and we're getting it ready. Come back to this page for updates on your order status.</p>
              </div>
              <div className="p-3 mt-3 confirm-form">
                <h5>Customer infomation</h5>
                <div className="w-50 float-left">
                  <p className="mb-0 font-weight-bold">Customer name</p>
                  <p>{fullName || 'N/A'}</p>
                  <p className="mb-0 font-weight-bold">Ship to</p>
                  <p>{address || 'N/A' }</p>
                </div>
                <div className="w-50 float-right">
                  <p className="mb-0 font-weight-bold">Email/Phone</p>
                  <p>{email || 'N/A'} - {phoneNumber || 'N/A'}</p>
                  <p className="mb-0 font-weight-bold">Payment method</p>
                  <p>{isSelect === 'cash' ? 'Cash on Delivery (COD) ' : 'Card master'}</p>
                </div>
              </div>
              <div className="p-3 mt-3 confirm-form">
                <h5>Order infomation</h5>
                <Table>
                  <tbody>
                    <tr>
                      <td className="border-0" style={{width: '10%'}}>
                        <img src={`${urlImage}/visa.jpg`} alt="visa"/>
                      </td>
                      <td className="border-0">
                        <div>abcbabawdawdawda</div>
                        <div>32 x $1000</div>
                      </td>
                      <td className="border-0 text-right">$2000</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td colSpan="2" className="text-right font-weight-bold" style={{fontSize: '18px'}}>$22222</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Button onClick={() => this.props.history.push('/')} className="float-right mt-4" color="primary">Go to shopping</Button>
            </Col>
          }
        </Row>
      </Container>
    );
  };
};

export default CartCheckout;
