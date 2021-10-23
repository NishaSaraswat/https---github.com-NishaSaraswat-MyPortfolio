import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import NavBar from './Components/Header/NavBar';
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/">
              <Home/>
          </Route>
          </Switch>
      </Router>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
