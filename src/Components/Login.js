import { faEnvelope, faLock, faSignInAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { login } from "../services/AuthService";

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let textChanged = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.taget.name === "password") {
            setPassword(event.target.value);
        }
    }

    let doLogin = (event) => {
        login(email, password)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <Container>
            <div className="row my-4" style={{ justifyContent: "center" }}>
                <div className="col-md-3 com-md-offset-3">
                    <Card>
                        <Card.Header> Login Form</Card.Header>
                        <Form>
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroup.Text>
                                        <Form.Control
                                            name="email" value={email}
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={textChanged}
                                        ></Form.Control>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faLock} />
                                        </InputGroup.Text>
                                        <Form.Control
                                            name="password" value={password}
                                            type="password"
                                            placeholder="Enter password"
                                            onChange={textChanged}
                                        ></Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" type="submit">
                                    <FontAwesomeIcon icon={faSignInAlt} />{' '}
                                    Login
                                </Button>{' '}
                                <Button variant="primary" type="reset">
                                    <FontAwesomeIcon icon={faUndo} />{' '}
                                    Reset
                                </Button>
                            </Card.Footer>
                        </Form>
                    </Card>
                </div>
            </div>
        </Container>
    );
}