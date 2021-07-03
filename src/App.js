import React, {useEffect, useState} from 'react';
import Landing from "./components/Landing";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollTopButton from "./components/ScrollTopButton";

const App = () => {
    const [pagePosition, setPagePosition] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        window.onscroll = () => {
            setPagePosition(window.pageYOffset);
        }
    }, []);

    return (
      <React.Fragment>
          <NavBar pagePosition={pagePosition} width={width}/>
          <Landing/>
          <About/>
          <Portfolio/>
          <Contact/>
          <ScrollTopButton pagePosition={pagePosition}/>
      </React.Fragment>
    );
}

export default App;
