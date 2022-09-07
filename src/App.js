import Student from './components/Student';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

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