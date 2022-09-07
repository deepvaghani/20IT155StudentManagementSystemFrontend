import './App.css';
import NavigationBar from './Components/NavigationBar';
import Student from './Components/Student';
import StudentList from './Components/StudentList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Student/>
      <StudentList/>
      <Footer/>
    </div>
  );
}

export default App;
