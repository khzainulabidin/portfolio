import React, {useEffect, useState} from 'react';
import Landing from "./components/Landing";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollTopButton from "./components/ScrollTopButton";

const App = () => {
    const [pagePosition, setPagePosition] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setPagePosition(window.pageYOffset);
        }
    }, []);

    return (
      <React.Fragment>
          <NavBar pagePosition={pagePosition}/>
          <Landing/>
          <About/>
          <Services/>
          <Portfolio/>
          <Contact/>
          <ScrollTopButton pagePosition={pagePosition}/>
      </React.Fragment>
    );
}

export default App;
