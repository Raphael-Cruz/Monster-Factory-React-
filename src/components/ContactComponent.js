import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
    import '../App.css';

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Thank you for your feedback!');
        event.preventDefault();
    }

    render() {
        
        return (
            <div className="backgroundContact" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                        
                            <h2 className="text-center pt-4">Contact Us</h2>
                            
                        </div>
                    </div>
        
                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <h4 >Our Address</h4>
                            <address className="text-light">
                                1 Monster St<br />
                                Connecticult, CT 06000<br />
                                U.S.A.
                            </address>
                        </div>
                        <div className="col">
                            <a role="button" className="btn btn-link" href="tel:+123456789"><i className="fa fa-phone" /> 1-123-456-7890</a><br />
                            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> monstefactory@default.com</a>
                        </div>
                    </div>
                    <div className="row row-content" style={{border: 'none'}}>
                        <div className="col-12 text-center">
                            <h2>Send us your Feedback</h2>
                            <hr />
                        </div>
                        <div className="col-md-10 text-light">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} />
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 4, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={this.state.feedback}
                                            onChange={this.handleInputChange}></Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="secondary">
                                            <i className="fa fa-comment fa-lg"></i> Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;