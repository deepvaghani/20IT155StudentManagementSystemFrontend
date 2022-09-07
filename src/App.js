import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      
      <NavigationBar/>
      <Container>
      <Student/>
      <StudentList/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;