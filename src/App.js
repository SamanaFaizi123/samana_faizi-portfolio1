import NavbarMenue from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import SmoothScrollbar from "./Components/SmoothScrollbar";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null)


function App() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () =>{
        setTheme((curr) =>(curr === "dark" ? "light" :"dark"))
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className="App" id={theme}>
          <Router>
            
               
         < NavbarMenue /> 
          
            <SmoothScrollbar>
            <Routes>
             <Route path="/about" element={<About />}> 
             </Route>
             <Route path="/projects" element={<Projects />}>
             </Route>
            <Route path="/Contact" element={<Contact />}>
            </Route>
            <Route path="/" element={<Home />}>
             </Route>
            </Routes>
            <div className="switch">
                <label>{theme === "light" ? 'LightMode' :"Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme ==='dark'}/>
            </div>
            <Footer />
            </SmoothScrollbar>
           
              
    
             
            </Router>
            </div>    
             </ThemeContext.Provider>
        
            
    )
}
export default App;