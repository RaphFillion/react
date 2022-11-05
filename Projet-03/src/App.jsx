import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageCountry from './Containers/ManageCountry/ManageCountry';
import Countries from './Containers/Countries/Countries';
import NavBar from './Components/navBar/navBar';
import Error from './Components/Error/error';
import Error404 from './Components/Error/Error404/error404';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<h1>Page d'accueil</h1>} />
          <Route path='countries' element={<ManageCountry />} />
          <Route path='countries/:id' element={<Countries />} />
          {/* Page 404 */}
          <Route path='*' element={<Error><Error404 /></Error>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
