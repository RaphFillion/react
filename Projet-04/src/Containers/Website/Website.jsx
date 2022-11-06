import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Localisation from './Localisation/Localisation';
import Contact from './Contact/Contact';
import NavBar from '../../Components/UI/NavBar/NavBar';
import Lost from '../../Components/404/Lost';

export default class Website extends Component {
  render() {
    return(
      <div style={{fontFamily: 'Poppins', height: '100%'}} className='position-relative'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='localisation' element={<Localisation />} />
          <Route path='contact/*' element={<Contact />} />
          <Route path='*' element={<Lost />} />
        </Routes>
      </div>
    )
  }
}