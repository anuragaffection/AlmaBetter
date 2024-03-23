import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function LearnRoute() {

  return (

    <Router>

      <div>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>

      </div>

    </Router>
  );
}


function Home() {
  return <h1>Home</h1>;
}


function About() {
  return <h1>About</h1>;
}


function Contact() {
  return <h1>Contact</h1>;
}


export default LearnRoute;