import React from 'react'
import { Card, Container, Table } from 'react-bootstrap'

export default function StudentList() {
    return (
        <div className="my-3">
            <Container>
                <Card.Header><h3>Students List</h3></Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Student Name</th>
                                <th>Student Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Container>
        </div>
    )
}