import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';

import AppNavbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Home from "./components/home.components"
import Help from "./components/help.component";
import Character from './components/character.component';
import Dungeon from './components/dungeon.component';

function App() {
  const [user, setUser] = useState("")

  if(window.localStorage.getItem("username") && user === ""){
    // setUser(window.localStorage.getItem("username"))
    let savedUser =window.localStorage.getItem('username')
    setUser(savedUser)
  }

  return (
    <Router>
      <AppNavbar user={user} setUser={setUser}/>
      <Route path= "/home">
        <Home setUser={setUser}/>
      </Route>
      <Route path="/characters">
        <Character />
      </Route>
      <Route path="/dungeon">
        <Dungeon />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Footer />
    </Router>
    
  );
}

export default App;
