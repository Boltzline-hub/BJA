import React from "react";
import { Element } from 'react-scroll';
import {Home, About, Portfolio, Contact, Team, Footer, Testimonials, Navba} from './components/index';

const App = () => {

  return (
    <div>
    <Navba/>
      <Element name="home">
        <Home />
      </Element> 
      <Element name="about" >
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Team/>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    <Footer/>
    </div>
  );
};

export default App;

