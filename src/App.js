import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Students from './components/Students';
import Dashboard from './components/Dashboard';




function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/AddStudent" element={<AddStudent/>}/>
        <Route path="/Students" element={<Students/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

    </Routes>
    </div>
    
    </div>
    </Router>
    // create a component that is going to comsume all the students in the database and display it in the component

  );
}

export default App;
