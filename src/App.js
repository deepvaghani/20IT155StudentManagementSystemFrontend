import './App.css';
import NavigationBar from './Components/NavigationBar';
import Student from './Components/Student';
import StudentList from './Components/StudentList';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Student/>
      <StudentList/>
    </div>
  );
}

export default App;
