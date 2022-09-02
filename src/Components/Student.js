import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

export default function Student() {
    return (
        <div className="my-3">
            <Container>
                <Card>
                    <Form>
                        <Card.Header>Add Student Information</Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Card.Body>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}