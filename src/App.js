import React from 'react';
import 'assets/main.scss';
import MainComponent from 'components/MainComponent'
import Footer from 'components/Footer'

export const  App = () =>  {
  return (
    <div className="App">
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
