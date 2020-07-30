import React, { Component } from 'react';
import firebase from '../../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for Slack
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input 
                                fluid 
                                name="username" 
                                icon="user" 
                                iconPosition="left" 
                                placeholder="Username" 
                                onChange={this.handleChange} 
                                type="text"
                                value={username}    
                            />
                            
                            <Form.Input 
                                fluid 
                                name="email" 
                                icon="mail" 
                                iconPosition="left" 
                                placeholder="Password" 
                                onChange={this.handleChange} 
                                type="email"
                                value={email}
                            />
                            
                            <Form.Input 
                                fluid 
                                name="password" 
                                icon="lock" 
                                iconPosition="left" 
                                placeholder="Password" 
                                onChange={this.handleChange} 
                                type="password"
                                value={password}
                            />
                            
                            <Form.Input 
                                fluid 
                                name="passwordConfirmation" 
                                icon="repeat" 
                                iconPosition="left" 
                                placeholder="Password Confirmation" 
                                onChange={this.handleChange} 
                                type="password"
                                value={passwordConfirmation}
                            />
                            
                            <Button 
                                color="orange" 
                                fluid 
                                size="large"
                            >
                                Submit
                            </Button>
                            
                        </Segment>
                    </Form>
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;