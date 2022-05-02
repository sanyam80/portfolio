import logo from './logo.svg';
import './App.css';
import {About} from "./components/about.js"
import {Home} from "./components/home.js";
import {Routes,Route} from "react-router-dom";
import {Navbar} from "./components/navbar.js";
 import {Skills} from "./components/skills.js";
  // import {Contacts} from "./components/contact.js";
import {Projects} from "./components/projects.js"
import {HashLink} from "react-router-hash-link";
import{Link} from "react-router-dom";






function App() {
  return (
    <div className="App">
        <h2 className = "s"><img className = "i" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Clcl8N4d--afaxmqY8A3yLvYDxkFr34E1tP8lNfXHcCehpsW8A1SDIa0ehrL_flxL1g&usqp=CAU"></img></h2>  
      
      <Navbar > <HashLink to= "/"  className = "App1">HOME</HashLink>
            <HashLink to= "#a" className = "App1">ABOUT</HashLink>
            <HashLink to = "#sk" className = "App1">SKILLS</HashLink>
            <HashLink to= "#p" className = "App1">PROJECTS</HashLink> 
             {/* <HashLink to = "/contacts"  className = "App1">CONTACT</HashLink>  */}
             </Navbar>
    <Routes>
      <Route path = "/"  element  = {<Home/>}></Route>
      <Route path= "a" element  = {<About/>}></Route>
      <Route path = "/skill" element = {<Skills/>}></Route>
      <Route path = "/projects" element = {<Projects/>}></Route>
       {/* <Route path = "/contacts" element = {<Contacts/>}></Route>  */}
     
    </Routes>
    </div>
  );
}

export default App;
