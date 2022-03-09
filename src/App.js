import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Accueil from './pages/accueil';
import Favoris from './pages/favoris';
import Contact from './pages/contact';
import Navbar from "./components/Navbar";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggle";

function App() {
const [theme, setTheme] = useState('dark');
const themeToggler = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light')
}
return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
  <GlobalStyles/>
 <div className='App'>
  
 <header className="App-header">
  <Router>
  <Toggle theme={theme} toggleTheme={themeToggler} />
  <Navbar/>
    <Routes>
    <Route exact path='/' element={<Accueil/>}/>
    <Route exact path='/favorites' element={<Favoris/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
  </header>
 </div>
  </>
  </ThemeProvider>
)}

export default App;