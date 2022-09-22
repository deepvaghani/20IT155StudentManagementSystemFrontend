// import Button from 'react-bootstrap/Button';
// import { Container, Card } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import axios from "axios";

// export default function Login(props) {

//     const [username, setUsername] = useState(null);
//     const [password, setPassword] = useState(null);

//     let login = {
//         username: username,
//         password: password
//     };

//     let textChanged = (event) => {
//         if (event.target.name === "username") {
//             setUsername(event.target.value);
//         } else if (event.target.name === "password") {
//             setPassword(event.target.value);
//         }
//     };

//     let loginStudent = (event) => {
//         event.preventDefault();

//         axios
//             .post("http://localhost:8080/login", login, { withCredentials: true })
//             .then((response) => {
//                 if (response.data != null) {
//                     props.showAlert("success", "Login Successfully");
//                 }
//             })
//             .catch((error) => props.showAlert("danger", "Error"));
//     };

//     return (
//         <div className="my-3">
//             <Container>
//                 <Card>
//                     <Form onSubmit={loginStudent}>
//                         <Card.Header>
//                             <strong>Login</strong>
//                         </Card.Header>
//                         <Card.Body>
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Username</Form.Label>
//                                 <Form.Control type="text" name="username" value={username} placeholder="Enter Username" onChange={textChanged} required/>
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" name="password" value={password} placeholder="Enter Password" onChange={textChanged} required />
//                             </Form.Group>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button variant="primary" type="submit">
//                                 Login
//                             </Button>
//                         </Card.Footer>
//                     </Form>
//                 </Card>
//             </Container>
//         </div >
//     );
// }