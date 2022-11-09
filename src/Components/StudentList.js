import React, { useEffect, useState } from "react";
import { Card, Container, Table, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";

export default function StudentList(props) {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStudents();
  }, []);

  let getStudents = () => {
    axios
      .get("http://localhost:8080/students",{withCredentials:true})
      .then((response) => setStudents(response.data))
      .catch((error) => alert(error));
  };

  let deleteStudent = (studentId) => {
    axios.delete("http://localhost:8080/student/"+studentId, {withCredentials:true})
    .then(response=> {
      if (response.data !== null){
        props.showAlert("success", "Record deleted successfully")
        setStudents(students.filter(student=>student.id!==studentId));
      }
      else{
        props.showAlert("danger", "Please Login.")
        navigate("/login");
      }
    })
  }

  return (
    <div className="my-3">
      <Container>
        <Card.Header>
          <h3>Students List</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={3}>{students.length} Students Available!!!</td>
                </tr>
              ) : (
                students.map((student)=>
                <tr key={student._Id}>
                  <td>{student.Id}</td>
                  <td>{student.Name}</td>
                  <td>{student.Address}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={"/students/"+student.id}><Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}> Edit </FontAwesomeIcon></Button></Link>{ ' '}
                      <Button size="sm" variant="outline-danger" onClick={deleteStudent.bind(this,student.id)}><FontAwesomeIcon icon={faTrash}> Delete </FontAwesomeIcon></Button>
                    </ButtonGroup>
                  </td>
                </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}