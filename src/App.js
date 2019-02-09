import React, { Component } from 'react';

//components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Home from './Components/pages/home';
//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Home/>
      <Footer/>
      </div>

    );
  }
}

export default App;
