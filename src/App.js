import React,{Component} from "react";
import './App.css';
import AutPage from "./components/autpage";
import firebase from "firebase";
import {Button, Container, Form} from "react-bootstrap";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        }

    }
    componentDidMount() {
        const db = firebase.database()
        console.log(db)
    }
    handleChange = ({target: {value, id}}) =>{
        this.setState({
            [id]: value
        })
    }
    createAccount = () =>{

    }
    render() {
        return (
            <div className="App">
                <Container fluid>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                onChange={this.handleChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}/>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            onSubmit={this.createAccount}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

