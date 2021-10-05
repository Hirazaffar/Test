import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './component/Header';
import Main from './component/Main';
import Login from "./component/Login";
import Navbar from './component/Navbar';
import Home from "./Home";
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
  
  <Router>
<Navbar/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/Login" component={Login}/>
   <Redirect to="/"/>
  </Switch>
  </Router>

      
      
   
  );
}

export default App;
