
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./Components/NavBar";
import DarkMode from "./Components/DarkMode";


function App() {

  return (
    <>
  
    
      <DarkMode />
 
     
     <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element ={<Blogs/>} />
          <Route path="/layout" element = {<Layout/> } />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/*" element={<NoPage/>} />

        </Routes>
     </Router>


      {/* <Klinecharts /> */}
    
    </>
  )
}

export default App
