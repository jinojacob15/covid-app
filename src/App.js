import React ,{useEffect}from 'react';
import 'assets/main.scss';
import MainComponent from 'components/MainComponent'
import Footer from 'components/Footer'
import ReactGA from 'react-ga'
//
export const  App = () =>  {

useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  },[]);

  return (
    <div className="App">
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
