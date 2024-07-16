import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from "./components/AdminLogin"
import MyNavbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';
import AppointmentPage from "./components/ApptPage"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>

    <div className='App'>
      {/* <MyNavbar/>
      <AppointmentPage/>
      <Footer/> */}
      <AdminLogin />
    </div>
    </Router>
  );
}

export default App;
