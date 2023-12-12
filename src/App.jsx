import React from 'react'
import "./App.css"

import Header from './Components/common/header/Header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/about/About.jsx';
import CourseHome from './Components/allcourses/CourseHome.jsx';
import Team from './Components/team/Team.jsx';
import Pricing from './Components/pricing/Pricing.jsx';
import Contact from './Components/contact/Contact.jsx';
import Blog from './Components/blog/Blog.jsx';
import Footer from './Components/common/footer/Footer.jsx';
import Home from './Components/home/Home';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;