import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router, 
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Overview from './Overview';
import Courses from './Courses';
import Testimonials from './Testimonials';
import Contact from './Contact';
const MenuBar = () => { 
  return (
    <Router>
      <div> 
      <Navbar className='bg-slate-600 w-full shadow-md z-20' fixed='top' expand="lg" data-bs-theme="dark">
        <div className='container'>
          <Navbar.Brand as={Link} to="/">Pramod Singh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default MenuBar
