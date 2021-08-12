import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";


import AppNavbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Home from "./components/home.components"
import Help from "./components/help.component";
import Character from './components/character.component';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Route path= "/home">
        <Home />
      </Route>
      <Route path="/characters">
        <Character />
      </Route>
      <Route path="/dungeon">
        <p>dungeon</p>
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Footer />
    </Router>
    
  );
}

export default App;
