import React from "react";
import {Home, About, Portfolio, Contact, Team, Footer, Testimonials, Navba} from './components/index';

const App = () => {


  return (
    <div>
    <Navba/> 
    <Home/>
    <About/>
    <Portfolio/>
    <Team/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default App;

