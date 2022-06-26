import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import { App as Container } from './styles/global'
import Header from './template/header';
import Navigation from './template/nav';
import Footer from './template/footer';
import Rotas from './Router'
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState('home');
  const href = window.location.href;
  const myRef = React.createRef<HTMLElement>();
  const handleScroll = () => {
    if(myRef.current?.scrollTop){
      setPosition(myRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if(href === 'http://localhost:3000/'){
      setActive('h');
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={myRef} onScroll={handleScroll}>
      <Navigation scrollPosition={position} active={active}/>
      <Header scrollPosition={position}/>
      <Router>
        <Rotas/>
      </Router>
      <Footer/>
    </Container>
  );
}

export default App;
